const menu = document.querySelector('.mkd-mobile-menu-opener');
const nav = document.querySelector('.mkd-mobile-nav');

menu.addEventListener ('click', () => {
    nav.classList.toggle('open');
})