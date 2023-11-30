// Import the 'logo' image from the specified file path.
import logo from '../assets/logo.png';

// Import functions from other modules.
import linkFactory from './links';
import menuStyles from './menuStyles';

// Define a function named 'nav'.
const nav = function () {
    // Get the 'body' element from the DOM.
    const body = document.querySelector('body');

    // Create a new html tag header element and store it in the 'header' variable.
    const header = document.createElement('header');

    // Append the 'header' element as a child to the 'body' element.
    body.appendChild(header);

    // Move the 'header' element to the top of the 'body' element.
    body.insertBefore(header, body.firstChild);

    // Creating an image element
    const logoImg = document.createElement('img');

    // Setting the image source
    logoImg.src = logo;

    // Appending the image to the header
    header.appendChild(logoImg);

    // Creating a menu
    const createMenu = () => {
        // Creating a menu for the header
        const menu = document.createElement('ul');
        menu.classList.add('menu');
        header.appendChild(menu);
        
        // Add 3 li elements to the menu ul
        const menuList = ['Home', 'Menu', 'About'];

        // Loop through the menuList array
        menuList.forEach((item) => {
            // Create a li element
            const menuItem = document.createElement('li');
            menuItem.classList.add('menu-item');
            menu.appendChild(menuItem);
    
            // Create a link element
            const link = document.createElement('a');
            link.href = '#';
            link.innerHTML = item;
            menuItem.appendChild(link);
        });
    };

    // Creating a hamburger menu
    const createHamburgerMenu = () => {
        // Creating an SVG element
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

        // Add 3 li elements to the menuHam ul
        const menuList = ['Home', 'Menu', 'About'];
        menuList.forEach((item) => {
            const menuItem = document.createElement('li');
            menuItem.classList.add('menu-item-ham');
            menu.appendChild(menuItem);

            const link = document.createElement('a');
            link.href = '#';
            link.innerHTML = item;
            menuItem.appendChild(link);
        });

        // Add click event listener to svg.ham
        svgElement.addEventListener('click', () => {
            // Select element with class 'menuHam'
            const menuHam = document.querySelector('.menuHam');

            // Toggle the 'active' class on the 'menuHam' element
            menuHam.classList.toggle('active');

            menuStyles();
        });
    };

    // Invoke functions
    createMenu();
    createHamburgerMenu();
    linkFactory();
};

// Export the 'nav' function.
export default nav;