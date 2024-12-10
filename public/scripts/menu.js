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

document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.querySelector('.sidebar');
    var footer = document.querySelector('footer');
    var comments_content = document.querySelector('.comments-content');
    var modal_header = document.querySelector('.modal-header');
    var header = document.querySelector('header');


    const canvas1 = document.getElementById('canvas1');
    const canvas2 = document.getElementById('canvas2');

    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');

    
    ctx1.beginPath();
    ctx1.arc(50, 50, 49, 0, 2 * Math.PI);
    ctx1.fillStyle = '#556B2F';
    ctx1.fill();

    ctx2.beginPath();
    ctx2.arc(50, 50, 49, 0, 2 * Math.PI);
    ctx2.fillStyle = '#8B0000'; 
    ctx2.fill();

    function loadSettings() {
        const storedSidebarColor = sessionStorage.getItem('sidebarColor');
        const storedFooterColor = sessionStorage.getItem('footerColor');

        if (storedSidebarColor) {
            sidebar.style.backgroundColor = storedSidebarColor;
        }
        if (storedFooterColor) {
            footer.style.backgroundColor = storedFooterColor;
        }
    }

    loadSettings();

    canvas1.addEventListener('click', function(e) {
        
        header.style.backgroundColor = '#556B2F';
        modal_header.style.backgroundColor = '#556B2F';
        sidebar.style.backgroundColor = '#556B2F';
        footer.style.backgroundColor = '#556B2F';
        comments_content.style.backgroundColor = '#556B2F';

        sessionStorage.setItem('sidebarColor', '#556B2F');
    });

    canvas2.addEventListener('click', function(e) {

        header.style.backgroundColor = '#8B0000';
        modal_header.style.backgroundColor = '#8B0000';
        sidebar.style.backgroundColor = '#8B0000';
        footer.style.backgroundColor = '#8B0000';
        comments_content.style.backgroundColor = '#8B0000';

        sessionStorage.setItem('sidebarColor', '#8B0000');
    });
});