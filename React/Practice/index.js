const bar = document.getElementById('loading-bar');
let wide = 0;
setInterval(() => {
    wide += 2;
    if (wide >= 80) return;
    bar.style.width = `${wide}vw`;
}, 500);