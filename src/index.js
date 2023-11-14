// Import CSS files for styling.
import './normalize.css';  // Reset default styles.
import './styles.css';     // Apply custom styles.

// Import the 'preloader' and 'home' functions.
import preloader from './pages/preloader';
import home from './pages/home';
import menu from './pages/menu';

// Invoke the 'preloader' and 'home' functions.
preloader();
home();

// Select all elements with class 'menu-item'
const menuItems = document.querySelectorAll('.menu-item');

// Select all elements with class 'menu-item-ham'
const menuItemsHam = document.querySelectorAll('.menu-item-ham');

// Select the element with class 'btn-wrapper'
const btnWrapper = document.querySelector('.btn-wrapper');

// Add click event listeners to each element with class 'menu-item'
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Check the inner text of the clicked element and log a message accordingly
        if (item.innerText === 'Home') {
            console.log('Home')
        } else if (item.innerText === 'Menu') {
            console.log('Menu')
        } else {
            console.log('Contact');
        }
    });
});

// Add click event listeners to each element with class 'menu-item-ham'
menuItemsHam.forEach((item) => {
    item.addEventListener('click', () => {
        // Check the inner text of the clicked element and log a message accordingly
        if (item.innerText === 'Home') {
            console.log('Home')
        } else if (item.innerText === 'Menu') {
            console.log('Menu')
        } else {
            console.log('Contact');
        }
    });
});

// Add a click event listener to the element with class 'btn-wrapper'
btnWrapper.addEventListener('click', () => {
    // Select the '#content' element and remove the '#home' element from it
    const content = document.querySelector('#content');
    const home = document.querySelector('#home');
    content.removeChild(home);

    // Select all elements with class 'menu-item'
    const menuItems = document.querySelectorAll('.menu-item');

    // Loop through each 'menu-item' element
    menuItems.forEach((item) => {
        // Access the first child element of each 'menu-item' and change its text color to black
        item.firstChild.style.color = 'black';
    });

    // Call the 'menu' function
    menu();
});