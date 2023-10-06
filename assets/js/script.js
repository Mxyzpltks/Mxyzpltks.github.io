const line = document.querySelector('.line');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    line.style.left = x + 'px';
});
