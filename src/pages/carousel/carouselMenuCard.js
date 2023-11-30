// Importing menu modules
import menuBurgers from "../menu/burgers";
import menuKids from "../menu/kids";
import menuSides from "../menu/sides";
import menuStarters from "../menu/starters";

// Function for carousel menu card
const carouselMenuCard = function () {
    // Selecting the menu carousel element
    const menuCarousel = document.querySelector('.menu-carousel');

    // Checking if the menu carousel exists
    if (menuCarousel) {
        // Function to handle carousel loop
        loopCarousel();

        // Selecting previous and next arrow elements
        const prevArrow = document.querySelector('.arrow.prev');
        const nextArrow = document.querySelector('.arrow.next');

        // Adding click event listeners to arrows to loop the carousel
        prevArrow.addEventListener('click', () => {
            loopCarousel();
        });

        nextArrow.addEventListener('click', () => {
            loopCarousel();
        });
    }
}

// Function to create and display burgers menu
function burgers () {
    const menu = document.querySelector('#menu');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-burgers');
    menu.appendChild(menuDiv);

    menuBurgers(); // Display burgers menu content
}

// Function to create and display starters menu
function starters () {
    const menu = document.querySelector('#menu');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-starters');
    menu.appendChild(menuDiv);

    menuStarters(); // Display starters menu content
}

// Function to create and display kids menu
function kids () {
    const menu = document.querySelector('#menu');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-kids');
    menu.appendChild(menuDiv);

    menuKids(); // Display kids menu content
}

// Function to create and display sides menu
function sides () {
    const menu = document.querySelector('#menu');
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-sides');
    menu.appendChild(menuDiv);

    menuSides(); // Display sides menu content
}

// Function to handle carousel loop based on selected item
function loopCarousel () {
    // Selecting the carousel menu items
    const menu = document.querySelector('#menu');
    const carouselMenuItems = document.querySelectorAll('.carousel-menu-item');
    const menuStarters = document.querySelector('.menu-starters');
    const menuKids = document.querySelector('.menu-kids');
    const menuSides = document.querySelector('.menu-sides');
    const menuBurgers = document.querySelector('.menu-burgers');

    // Looping through the carousel menu items
    carouselMenuItems.forEach((item) => {
        // Checking if the item has the 'active' class
        if (item.classList.contains('active')) {
            if (item.innerHTML === 'Starters') {
                // Logic for displaying starters menu and handling duplicates
                if (menuBurgers || menuKids || menuSides) {
                    // Grab the classlist name of the last child of #menu and remove it
                    const lastChild = menu.lastChild;
                    menu.removeChild(lastChild);

                    starters(); // Display starters menu
                } else if (menuStarters) {
                    // DO NOTHING
                } else {
                    starters(); // Display starters menu
                }
            } else if (item.innerHTML === 'Burgers') {
                // Logic for displaying burgers menu and handling duplicates
                if (menuStarters || menuKids || menuSides) {
                    // Grab the classlist name of the last child of #menu and remove it
                    const lastChild = menu.lastChild;
                    menu.removeChild(lastChild);

                    burgers(); // Display burgers menu
                } else if (menuBurgers) {
                    // DO NOTHING
                } else {
                    burgers(); // Display burgers menu
                }
            } else if (item.innerHTML === 'Kids Meals') {
                // Logic for displaying kids menu and handling duplicates
                if (menuBurgers || menuStarters || menuSides) {
                    // Grab the classlist name of the last child of #menu and remove it
                    const lastChild = menu.lastChild;
                    menu.removeChild(lastChild);
                
                    kids(); // Display kids menu
                } else if (menuKids) {
                    // DO NOTHING
                } else {
                    kids(); // Display kids menu
                }
            } else if (item.innerHTML === 'Sides') {
                // Logic for displaying sides menu and handling duplicates
                if (menuBurgers || menuKids || menuStarters) {
                    // Grab the classlist name of the last child of #menu and remove it
                    const lastChild = menu.lastChild;
                    menu.removeChild(lastChild);
                
                    sides(); // Display sides menu
                } else if (menuSides) {
                    // DO NOTHING
                } else {
                    sides(); // Display sides menu
                }
            }
        }
    });
}

// Exporting the carouselMenuCard function
export default carouselMenuCard;