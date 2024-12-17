document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.querySelector('.sidebar');
    var footer = document.querySelector('footer');
    var comments_content = document.querySelector('.comments-content');
    var modal_header = document.querySelector('.modal-header');
    var header = document.querySelector('header');


    var canvas1 = document.getElementById('canvas1');
    var canvas2 = document.getElementById('canvas2');

    var ctx1 = canvas1.getContext('2d');
    var ctx2 = canvas2.getContext('2d');

    
    ctx1.beginPath();
    ctx1.arc(50, 50, 49, 0, 2 * Math.PI);
    ctx1.fillStyle = '#556B2F';
    ctx1.fill();

    ctx2.beginPath();
    ctx2.arc(50, 50, 49, 0, 2 * Math.PI);
    ctx2.fillStyle = '#8B0000'; 
    ctx2.fill();

    function loadSettings() {
        var storedSidebarColor = sessionStorage.getItem('sidebarColor');
        var storedFooterColor = sessionStorage.getItem('footerColor');
        var storedHeaderColor = sessionStorage.getItem('headerColor');
        var storedCommentsColor = sessionStorage.getItem('commentsColor');
        var storedModalColor = sessionStorage.getItem('modalColor');

        if (storedSidebarColor) {
            sidebar.style.backgroundColor = storedSidebarColor;
        }
        if (storedFooterColor) {
            footer.style.backgroundColor = storedFooterColor;
        }
        if (storedHeaderColor){
            header.style.backgroundColor = storedHeaderColor;
        }
        if (storedCommentsColor){
            comments_content.style.backgroundColor = storedCommentsColor;
        }
        if(storedModalColor) {
            modal_header.style.backgroundColor = storedModalColor;
        }
    }

    loadSettings();

    canvas1.addEventListener('click', function(e) {
        
        header.style.backgroundColor = '#556B2F';
        modal_header.style.backgroundColor = '#556B2F';
        sidebar.style.backgroundColor = '#556B2F';
        footer.style.backgroundColor = '#556B2F';
        comments_content.style.backgroundColor = '#556B2F';

        sessionStorage.setItem('footerColor','#556B2F');
        sessionStorage.setItem('sidebarColor', '#556B2F');
        sessionStorage.setItem('headerColor', '#556B2F');
        sessionStorage.setItem('commentsColor', '#556B2F');
        sessionStorage.setItem('modalColor', '#556B2F');
    });


    canvas2.addEventListener('click', function(e) {

        header.style.backgroundColor = '#8B0000';
        modal_header.style.backgroundColor = '#8B0000';
        sidebar.style.backgroundColor = '#8B0000';
        footer.style.backgroundColor = '#8B0000';
        comments_content.style.backgroundColor = '#8B0000';

        sessionStorage.setItem('footerColor','#8B0000');
        sessionStorage.setItem('sidebarColor', '#8B0000');
        sessionStorage.setItem('headerColor', '#8B0000');
        sessionStorage.setItem('commentsColor', '#8B0000');
        sessionStorage.setItem('modalColor', '#8B0000');
    });
});

var radios = document.querySelectorAll('input[name="flexRadio"]');
var header = document.querySelector('header');
var storedRadioSelect = sessionStorage.getItem('radioSelect');
if (storedRadioSelect) {
  document.body.style.fontFamily = storedRadioSelect;
  radios.forEach(radio => {
    if (radio.value === storedRadioSelect) {
      radio.checked = true;
    }
  });
}
radios.forEach(radio => {
  radio.addEventListener('change', function(e) {
    var radioSelect;
    switch (e.target.id) {
      case 'radio_play':
        radioSelect = 'Play';
        break;
      case 'radio_caveat':
        radioSelect = 'Caveat';
        break;
      case 'radio_sans-serif':
        radioSelect = 'sans-serif';
        break;
      default:
        radioSelect = 'sans-serif';
    }
    fonts = sessionStorage.setItem('radioSelect', radioSelect);
    document.body.style.fontFamily = radioSelect;
    
  });
});
