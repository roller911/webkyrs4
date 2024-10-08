const menu_but = document.getElementById('menu-but');
const sidebar = document.getElementById('sidebar');
const close_but = document.getElementById('close-but');
const search_i = document.getElementById('searchbar');
const item_list = document.getElementById('itemli');
const items = item_list.getElementsByTagName('li');


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



search_i.addEventListener('keyup', () => {
    const filter = search_i.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
        const textValue = items[i].textContent || items[i].innerText;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            items[i].classList.remove('hidden');
        } else {
            items[i].classList.add('hidden'); 
        }
    }
});
