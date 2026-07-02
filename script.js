const music = document.getElementById("bg-music");

window.addEventListener("click", () => {
    music.volume = 0.35;
    music.play().catch(() => {});
}, { once: true });
