const menuHamburger = document.querySelector('#menu-hamburger');
const listaHamburger = document.querySelector('#lista-hamburger');

menuHamburger.addEventListener('click', () => {
    listaHamburger.classList.toggle('active');
});
