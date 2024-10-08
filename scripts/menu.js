const menu_but = document.getElementById('menu-but');
const sidebar = document.getElementById('sidebar');
const close_but = document.getElementById('close-but');

menu_but.addEventListener('click', () => {
    sidebar.classList.add('open');
});

close_but.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

document.addEventListener('click', (event) => {
    const isInside = sidebar.contains(event.target) || menu_but.contains(event.target);
    if (!isInside) {
        sidebar.classList.remove('open');
    }
});
