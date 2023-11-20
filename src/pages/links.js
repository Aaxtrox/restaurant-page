// Import functions from other modules.
import home from './home';
import menu from './menu';

// Creates links for the menu items.
const linkFactory = function () {
    // Select all anchor elements on the page
    const links = document.querySelectorAll('a');
    
    // Iterate through each anchor element
    links.forEach((link) => {
        // Add a click event listener to each anchor
        link.addEventListener('click', () => {
            // Check if the clicked anchor is 'Home' or 'Menu' or 'Contact'
            if (link.innerHTML === 'Home') {
                // Check if the last child of '#content' is not 'home'
                if (document.querySelector('#content').lastChild.id !== 'home') {
                    // Remove the current last child of '#content'
                    document.querySelector('#content').removeChild(document.querySelector('#content').lastChild);
                    
                    // Call the 'home' function to display the 'home' section
                    home();

                    // Call the 'color' function to change the text color of the menu items
                    color();
                }
            } else if (link.innerHTML === 'Menu') {
                // Check if the last child of '#content' is not 'menu'
                if (document.querySelector('#content').lastChild.id !== 'menu') {
                    // Remove the current last child of '#content'
                    document.querySelector('#content').removeChild(document.querySelector('#content').lastChild);

                    // Call the 'menu' function to display the 'menu' section
                    menu();

                    // Call the 'color' function to change the text color of the menu items
                    color();
                }
            } else if (link.innerHTML === 'Contact') {
                console.log('Contact');
            }
        });
    });
}

// Changes the text color of the menu items.
function color () {
    // Check if an element with ID 'home' exists in the document
    if (document.querySelector('#home')) {
        // If '#home' exists, select all elements with the class 'menu-item'
        const menuItems = document.querySelectorAll('.menu-item');

        // Iterate through each 'menu-item' element
        menuItems.forEach((item) => {
            // Set the color of the first child element's text to white
            item.firstChild.style.color = 'white';
        });

        // Select all elements with the class 'line'
        const lines = document.querySelectorAll('.line');

        // Iterate through each 'line' element
        lines.forEach((line) => {
            // Set the color of each 'line' element to white
            line.style.stroke = 'white';
        });
    } else {
        // If '#home' does not exist, select all elements with the class 'menu-item'
        const menuItems = document.querySelectorAll('.menu-item');

        // Iterate through each 'menu-item' element
        menuItems.forEach((item) => {
            // Set the color of the first child element's text to black
            item.firstChild.style.color = 'black';
        });

        // Select all elements with the class 'line'
        const lines = document.querySelectorAll('.line');

        // Iterate through each 'line' element
        lines.forEach((line) => {
            // Set the color of each 'line' element to black
            line.style.stroke = 'black';
        });
    }
}

// Export the 'linkFactory' functions
export default linkFactory;