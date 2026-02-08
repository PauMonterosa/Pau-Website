// Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let current = 0;

const triggerGlitch = () => {
    // Crear el efecto visual de "Hackeo"
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
    overlay.style.zIndex = '9999';
    overlay.style.pointerEvents = 'none';
    overlay.style.animation = 'glitch-anim 0.1s infinite';
    
    // Añadir el estilo de la animación dinámicamente
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes glitch-anim {
            0% { transform: translate(0); background: rgba(0,255,0,0.2); }
            20% { transform: translate(-5px, 5px); background: rgba(255,0,255,0.2); }
            40% { transform: translate(5px, -5px); background: rgba(0,0,255,0.2); }
            60% { transform: translate(-5px, -5px); filter: hue-rotate(90deg); }
            80% { transform: translate(5px, 5px); opacity: 0.5; }
            100% { transform: translate(0); }
        }
        body { transition: filter 0.1s; filter: invert(1); }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(overlay);

    // Redirigir después de 800ms de caos
    setTimeout(() => {
        window.location.href = "/secret/tetris";
    }, 800);
};

document.addEventListener('keydown', (e) => {
    // Normalizamos a minúsculas para B y A
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    
    if (key === (code[current].length === 1 ? code[current].toLowerCase() : code[current])) {
        current++;
        if (current === code.length) {
            current = 0;
            triggerGlitch();
        }
    } else {
        current = 0;
    }
});