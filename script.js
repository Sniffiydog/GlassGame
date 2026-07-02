const music = document.getElementById("bg-music");

document.addEventListener("click", () => {
    music.volume = 0.35;
    music.play().catch(() => {});
}, { once: true });
