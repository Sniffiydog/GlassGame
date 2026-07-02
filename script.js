const music = document.getElementById("bg-music");

window.addEventListener("click", () => {
    music.volume = 0.35;
    music.play().catch(() => {});
}, { once: true });

// Tab wechseln → sofort stoppen
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        music.pause();
        music.currentTime = 0; // optional: komplett reset
    }
});

// Seite verlassen → stoppen
window.addEventListener("pagehide", () => {
    music.pause();
    music.currentTime = 0;
});
