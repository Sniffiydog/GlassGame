const music = document.getElementById("bg-music");

window.addEventListener("click", () => {
    music.volume = 0.25;
    music.play().catch(() => {});
}, { once: true });

document.addEventListener("visibilitychange", () => {
    const music = document.getElementById("bg-music");

    if (document.hidden) {
        music.pause();
    } else {
        music.play().catch(() => {});
    }
});
