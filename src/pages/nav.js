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

    // Check if the screen width is greater than or equal to 500px
    if (window.innerWidth >= 500) {
        // Creating a new unordered list element
        const menu = document.createElement('ul');

        // Adding a CSS class to the newly created unordered list
        menu.classList.add('menu');

        // Appending the unordered list to the header
        header.appendChild(menu);

        // An array containing menu items
        const menuList = ['Home', 'Menu', 'Contact'];

        // Iterating through each menu item in the array
        menuList.forEach((item) => {

            // Creating a list item for each menu item
            const menuItem = document.createElement('li');

            // Adding a CSS class to the list item
            menuItem.classList.add('menu-item');

            // Appending each list item to the unordered list
            menu.appendChild(menuItem);

            // Add a element to each list item
            const link = document.createElement('a');

            // Set the href attribute of the link element
            link.href = '#';

            // Set the inner text of the link element
            link.innerHTML = item;

            // Append the link element to the list item
            menuItem.appendChild(link);
        });
    } else {
        // Create an SVG element
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("class", "ham hamRotate");
        svgElement.setAttribute("viewBox", "0 0 100 100");
        svgElement.setAttribute("width", "40");
        svgElement.setAttribute("onclick", "this.classList.toggle('active')");

        // Create the path elements
        const pathTop = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathTop.setAttribute("class", "line top");
        pathTop.setAttribute("d", "m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20");

        const pathMiddle = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathMiddle.setAttribute("class", "line middle");
        pathMiddle.setAttribute("d", "m 30,50 h 40");

        const pathBottom = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathBottom.setAttribute("class", "line bottom");
        pathBottom.setAttribute("d", "m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20");

        // Append the path elements to the SVG element
        svgElement.appendChild(pathTop);
        svgElement.appendChild(pathMiddle);
        svgElement.appendChild(pathBottom);

        // Append the SVG element to the header
        header.appendChild(svgElement);
    }
}

// Export the 'nav' function.
export default nav;