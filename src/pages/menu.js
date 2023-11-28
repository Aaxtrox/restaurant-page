// Import the carouselMenu function from the carouselMenu.js file
import carouselMenu from './carousel/carouselMenu';

// Function to create a menu element
const menu = function () {
    // Get the 'content' element from the DOM
    const content = document.querySelector('#content');

    // Create a 'menu' div element
    const menu = document.createElement('div');
    menu.id = 'menu'; // Set the ID of the menu div
    content.appendChild(menu); // Append the menu to the 'content' element

    // Create a 'carousel' div element
    const carousel = document.createElement('div');
    carousel.classList = 'carousel'; // Set the classList of the carousel div
    menu.appendChild(carousel); // Append the carousel to the 'menu' element

    // Create a 'menu-carousel' div element
    const menuCarousel = document.createElement('div');
    menuCarousel.classList = 'menu-carousel'; // Set the classList of the menu-carousel div
    carousel.appendChild(menuCarousel); // Append the menu-carousel to the 'carousel' element

    // Create a 'arrows' div element
    const arrows = document.createElement('div');
    arrows.classList = 'arrows'; // Set the classList of the arrows div
    carousel.appendChild(arrows); // Append the arrows to the 'carousel' element

    // Create a 'carousel-menu-item' div element
    for (let i = 0; i < 4; i++) {
        const carouselMenuItem = document.createElement('div');
        carouselMenuItem.classList.add('carousel-menu-item'); // Add the class carousel-menu-item to the div
        menuCarousel.appendChild(carouselMenuItem); // Append the carousel-menu-item to the 'menu-carousel' element
    }

    // Add inner text to the 'carousel-menu-item' div elements
    const carouselMenuItems = document.querySelectorAll('.carousel-menu-item');
    carouselMenuItems[0].innerText = 'Starters';
    carouselMenuItems[1].innerText = 'Burgers';
    carouselMenuItems[2].innerText = 'Kids Meals';
    carouselMenuItems[3].innerText = 'Side Orders';

    // Add class active to the second 'carousel-menu-item' div element
    carouselMenuItems[1].classList.add('active');

    // Create a 'arrow' div element
    const arrowPrev = document.createElement('div');
    arrowPrev.classList = 'arrow prev'; // Set the classList of the arrow div
    arrows.appendChild(arrowPrev); // Append the arrow to the 'arrows' element

    // Create a 'arrow' div element
    const arrowNext = document.createElement('div');
    arrowNext.classList = 'arrow next'; // Set the classList of the arrow div
    arrows.appendChild(arrowNext); // Append the arrow to the 'arrows' element

    // Add &lt; and &gt; to the 'arrow' div elements
    arrowPrev.innerHTML = '&lt;';
    arrowNext.innerHTML = '&gt;';

    // Call the carouselMenu function to animate the carousel
    carouselMenu();

    window.addEventListener('resize', () => {
        carouselMenu();
    });
}

// Export the 'menu' function
export default menu;