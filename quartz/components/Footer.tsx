import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"
// 1. Importamos el script del Konami Code
// @ts-ignore
import konamiScript from "./scripts/konami.inline"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year} 
          {/* 2. Opcional: Un pequeño punto casi invisible como pista para "hackers" */}
          <span style={{ opacity: 0.05, cursor: "default" }}> .</span>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  // 3. Esta línea registra el script para que Quartz lo ejecute en el navegador
  Footer.afterDOMLoaded = konamiScript
  
  return Footer
}) satisfies QuartzComponentConstructor
