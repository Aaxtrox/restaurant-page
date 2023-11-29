import menuBurgers from "../menu/burgers";

const carouselMenuCard = function () {
    const menuCarousel = document.querySelector('.menu-carousel');

    if (menuCarousel) {
        loopCarousel();

        const prevArrow = document.querySelector('.arrow.prev');
        const nextArrow = document.querySelector('.arrow.next');

        prevArrow.addEventListener('click', () => {
            loopCarousel();
        });

        nextArrow.addEventListener('click', () => {
            loopCarousel();
        });
    }
}

function burgers () {
    const menu = document.querySelector('#menu');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-burgers');
    menu.appendChild(menuDiv);

    menuBurgers();
}

function starters () {
    const menu = document.querySelector('#menu');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-starters');
    menu.appendChild(menuDiv);
}

function kids () {
    const menu = document.querySelector('#menu');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-kids');
    menu.appendChild(menuDiv);
}

function sides () {
    const menu = document.querySelector('#menu');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-sides');
    menu.appendChild(menuDiv);
}

function loopCarousel () {
    const menu = document.querySelector('#menu');
    const carouselMenuItems = document.querySelectorAll('.carousel-menu-item');
    const menuStarters = document.querySelector('.menu-starters');
    const menuKids = document.querySelector('.menu-kids');
    const menuSides = document.querySelector('.menu-sides');
    const menuBurgers = document.querySelector('.menu-burgers');

    carouselMenuItems.forEach((item) => {
        if (item.classList.contains('active')) {
            if (item.innerHTML === 'Starters') {
                if (menuBurgers || menuKids || menuSides) {
                    // grab the classlist name of the last child of #menu and remove it
                    const lastChild = menu.lastChild;
                    menu.removeChild(lastChild);

                    starters();
                } else if (menuStarters) {
                    // do nothing
                } else {
                    starters();
                }
            } else if (item.innerHTML === 'Burgers') {
                if (menuStarters || menuKids || menuSides) {
                    // grab the classlist name of the last child of #menu and remove it
                    const lastChild = menu.lastChild;
                    menu.removeChild(lastChild);

                    burgers();
                } else if (menuBurgers) {
                    // do nothing
                } else {
                    burgers();
                }
            } else if (item.innerHTML === 'Kids Meals') {
                if (menuBurgers || menuStarters || menuSides) {
                    // grab the classlist name of the last child of #menu and remove it
                    const lastChild = menu.lastChild;
                    menu.removeChild(lastChild);
                
                    kids();
                } else if (menuKids) {
                    // do nothing
                } else {
                    kids();
                }
            } else if (item.innerHTML === 'Sides') {
                if (menuBurgers || menuKids || menuStarters) {
                    // grab the classlist name of the last child of #menu and remove it
                    const lastChild = menu.lastChild;
                    menu.removeChild(lastChild);
                
                    sides();
                } else if (menuSides) {
                    // do nothing
                } else {
                    sides();
                }
            }
        }
    });
}

export default carouselMenuCard;