const burger_menu = document.querySelector('.burger');
const menu = document.querySelector('.burger-menu');
const close_button = document.querySelector('.burger-close-span');
const link_isClicked = document.querySelector('.burger-nav-li');

if(burger_menu){
    burger_menu.addEventListener('click', () => {
        menu.classList.toggle('menu-display')
    })
}

if(close_button){
    close_button.addEventListener('click', () => {
        menu.classList.toggle('menu-display')
    })
}

if(link_isClicked){
    link_isClicked.addEventListener('click', () => {
        menu.classList.toggle('menu-display')
    })
}