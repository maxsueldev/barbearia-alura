const menuHamburger = document.querySelector('#menu-hamburger');
const listaHamburger = document.querySelector('#lista-hamburger');

menuHamburger.addEventListener('click', () => {
    if(listaHamburger.style.display == 'block') {
        listaHamburger.style.display = 'none';
    } else {
        listaHamburger.style.display = 'block';
    }
});
