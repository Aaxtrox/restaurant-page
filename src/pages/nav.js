// Import the 'logo' image from the specified file path.
import logo from '../assets/logo.png';

// Define a function named 'nav'.
const nav = function () {
    // Find the HTML element with the id 'content' and store it in the 'content' variable.
    const content = document.querySelector('#content');

    // Create a new html tag header element and store it in the 'header' variable.
    const header = document.createElement('header');

    // Append the 'header' element as a child to the 'content' element.
    content.appendChild(header);

    // Creating an image element
    const logoImg = document.createElement('img');

    // Setting the image source
    logoImg.src = logo;

    // Appending the image to the header
    header.appendChild(logoImg);

    // Run the 'menuFactory' function and pass the 'header' element as an argument.
    menuFactory(header);

    // Run the 'menuFactory' function when the window is resized.
    window.addEventListener('resize', () => {
        menuFactory(header);
    });
}

// Creates a menu or hamburger menu based on the window width.
function menuFactory(header) {
    // Check for existing menu and hamburger elements
    const existingMenu = header.querySelector('ul.menu');
    const existingSVG = header.querySelector('svg.ham');

    // Remove existing menu or hamburger elements if present
    if (existingMenu) {
        header.removeChild(existingMenu); // Remove the existing ul.menu
    } else if (existingSVG) {
        header.removeChild(existingSVG); // Remove the existing svg.ham
    }

    // Creates a standard menu with list items and links.
    const createMenu = () => {
        const menu = document.createElement('ul');
        menu.classList.add('menu');
        header.appendChild(menu);

        const menuList = ['Home', 'Menu', 'Contact'];
        menuList.forEach((item) => {
            const menuItem = document.createElement('li');
            menuItem.classList.add('menu-item');
            menu.appendChild(menuItem);

            const link = document.createElement('a');
            link.href = '#';
            link.innerHTML = item;
            menuItem.appendChild(link);
        });
    };

    // Creates a hamburger menu with SVG elements and functionality.
    const createHamburgerMenu = () => {
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("class", "ham hamRotate");
        svgElement.setAttribute("viewBox", "0 0 100 100");
        svgElement.setAttribute("width", "40");
        svgElement.setAttribute("onclick", "this.classList.toggle('active')");

        // Creating paths for the hamburger lines
        const pathTop = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathTop.setAttribute("class", "line top");
        pathTop.setAttribute("d", "m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20");

        const pathMiddle = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathMiddle.setAttribute("class", "line middle");
        pathMiddle.setAttribute("d", "m 30,50 h 40");

        const pathBottom = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathBottom.setAttribute("class", "line bottom");
        pathBottom.setAttribute("d", "m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20");

        // Appending paths to the SVG element
        svgElement.appendChild(pathTop);
        svgElement.appendChild(pathMiddle);
        svgElement.appendChild(pathBottom);

        // Adding the SVG hamburger element to the header
        header.appendChild(svgElement);

        // Creating a menu for the hamburger functionality
        const menu = document.createElement('ul');
        menu.classList.add('menuHam');
        header.appendChild(menu);

        // Adding click event listener to toggle hamburger menu visibility
        svgElement.addEventListener('click', () => {
            menu.classList.toggle('active');
            const lines = svgElement.querySelectorAll('.line');
            lines.forEach((line) => {
                line.classList.toggle('active');
            });
        });
    };

    // Check window size to determine which menu to create
    if (window.innerWidth >= 500) {
        createMenu(); // Create a standard menu
    } else {
        createHamburgerMenu(); // Create a hamburger menu
    }
}

// Export the 'nav' function.
export default nav;