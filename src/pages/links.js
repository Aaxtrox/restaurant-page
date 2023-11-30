// Import functions from other modules.
import home from './home';
import menu from './menu';
import about from './about';

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

                    // Call the 'click' function to remove the 'active' class from the 'svg.ham' and '.menuHam' elements
                    click();
                }
            } else if (link.innerHTML === 'Menu') {
                // Check if the last child of '#content' is not 'menu'
                if (document.querySelector('#content').lastChild.id !== 'menu') {
                    // Remove the current last child of '#content'
                    document.querySelector('#content').removeChild(document.querySelector('#content').lastChild);

                    // Call the 'menu' function to display the 'menu' section
                    menu();

                    // Call the 'click' function to remove the 'active' class from the 'svg.ham' and '.menuHam' elements
                    click();
                }
            } else if (link.innerHTML === 'About') {
                // Check if the last child of '#content' is not 'about'
                if (document.querySelector('#content').lastChild.id !== 'about') {
                    // Remove the current last child of '#content'
                    document.querySelector('#content').removeChild(document.querySelector('#content').lastChild);

                    // Call the 'about' function to display the 'about' section
                    about();

                    // Call the 'click' function to remove the 'active' class from the 'svg.ham' and '.menuHam' elements
                    click();
                }
            }
        });
    });
};

// Hide hamburger menu when a menu item is clicked.
function click () {
    // Select the 'svg.ham' and '.menuHam' elements
    const ham = document.querySelector('svg.ham');
    const menuHam = document.querySelector('.menuHam');

    // Remove the 'active' class from the 'svg.ham' and '.menuHam' elements
    if (ham) {
        ham.classList.remove('active');
        menuHam.classList.remove('active');
    }
}

// Export the 'linkFactory' functions
export default linkFactory;