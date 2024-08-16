const Burger = document.getElementById('menuBurger');
const Display = document.getElementById('menuDisplay');

Burger.addEventListener('click', menuOnOff);

function menuOnOff() {
    Display.classList.toggle('toogle');
};

