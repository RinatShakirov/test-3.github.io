window.addEventListener('load', function(){
    let btn = document.querySelector('.menu-toggle');
    let activeMenu = document.querySelector('.nav-inner');

    btn.onclick = function(){
        activeMenu.classList.toggle('nav-inner-on');
    }
});