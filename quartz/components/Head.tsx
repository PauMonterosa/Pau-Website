import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../plugins/emitters/ogImage"

export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    const socialUrl =
      fileData.slug === "404" ? url.toString() : joinSegments(url.toString(), fileData.slug!)

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`

    return (
      <head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
          rel="stylesheet"
        />

        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}

        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}

        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}

        {/* CSS inline (fons + halo). Quan ho tinguem estable, ho movem a custom.scss */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
:root {
  --halo-x: 50%;
  --halo-y: 50%;
  --bg1: rgb(10,15,42);
  --shift: 0%;
}

html::before{
  content:"";
  position:fixed;
  inset:-25%;
  z-index:-9999;
  background:
    radial-gradient(circle at calc(20% + var(--shift)) 25%, rgba(0,120,255,.85) 0%, rgba(0,0,0,0) 45%),
    radial-gradient(circle at calc(85% - var(--shift)) 70%, rgba(0,210,255,.75) 0%, rgba(0,0,0,0) 48%),
    radial-gradient(circle at 55% 55%, rgba(120,0,255,.35) 0%, rgba(0,0,0,0) 55%),
    radial-gradient(circle at 50% 50%, rgba(0,10,30,1) 0%, rgba(0,0,0,1) 70%),
    linear-gradient(180deg, var(--bg1), rgba(0,0,0,1));
  filter: blur(140px);
  opacity:.95;
  transform: translateZ(0);
}

html::after{
  content:"";
  position:fixed;
  inset:0;
  z-index:-9998;
  pointer-events:none;
  background:
    radial-gradient(280px circle at var(--halo-x) var(--halo-y),
      rgba(255,255,255,.22),
      rgba(255,255,255,0) 65%),
    rgba(0,0,0,.40);
}

html, body, #quartz-body, .page, main, article, .content, .center, .left, .right {
  background: transparent !important;
}
            `.trim(),
          }}
        />

        {/* JS inline: halo cursor + scroll color shift */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(() => {
  const root = document.documentElement;

  // cursor halo
  const setHalo = (x, y) => {
    root.style.setProperty("--halo-x", x + "px");
    root.style.setProperty("--halo-y", y + "px");
  };
  window.addEventListener("mousemove", (e) => setHalo(e.clientX, e.clientY), { passive: true });
  window.addEventListener("touchmove", (e) => {
    const t = e.touches && e.touches[0];
    if (t) setHalo(t.clientX, t.clientY);
  }, { passive: true });

  // scroll color shift
  const lerp = (a, b, t) => a + (b - a) * t;

  const colorAt = (t) => {
    const palette = [
      [10, 15, 42],  // deep blue
      [26, 15, 42],  // violet
      [42, 10, 20],  // warm dark
      [10, 15, 42],  // back to blue
    ];
    const i = Math.min(palette.length - 2, Math.floor(t));
    const f = t - i;
    const c1 = palette[i];
    const c2 = palette[i + 1];
    return [
      Math.round(lerp(c1[0], c2[0], f)),
      Math.round(lerp(c1[1], c2[1], f)),
      Math.round(lerp(c1[2], c2[2], f)),
    ];
  };

  const onScroll = () => {
    const max = document.body.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;

    // nebula drift
    root.style.setProperty("--shift", (p * 40) + "%");

    // smooth color timeline
    const t = p * 3;
    const rgb = colorAt(t);
    root.style.setProperty("--bg1", "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")");
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
            `.trim(),
          }}
        />
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor

