var header = document.getElementById('header')
var menu_icon = document.getElementById('menu_icon')

document.getElementById('header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
  
  menu-icon.on("click", function(){
    $("nav").slideToggle();
    $(this).toggleClass("active");
});
/*https://up-sait.ru/menyu-dlya-sajta-html-gorizontalnoe*/