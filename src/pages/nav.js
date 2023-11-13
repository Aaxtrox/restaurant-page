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
}

// Export the 'nav' function.
export default nav;