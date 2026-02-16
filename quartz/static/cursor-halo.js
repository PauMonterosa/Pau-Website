(() => {
  const root = document.documentElement;

  window.addEventListener("mousemove", (e) => {
    root.style.setProperty("--halo-x", e.clientX + "px");
    root.style.setProperty("--halo-y", e.clientY + "px");
  }, { passive: true });
})();
