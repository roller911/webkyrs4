var menu_but = document.getElementById('menu-but');
var sidebar = document.getElementById('sidebar');
var close_but = document.getElementById('close-but');
var search_i = document.getElementById('searchbar');
var item_list = document.getElementById('itemli');
var items = item_list.getElementsByTagName('li');



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


document.addEventListener('DOMContentLoaded', function() {
    var modalSettings = document.getElementById('settings');
    var close_modal = document.getElementById('close_modal');
    var modal = document.getElementById('modal');


    modalSettings.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    close_modal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

