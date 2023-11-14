// Function to create a menu element
const menu = function () {
    // Get the 'content' element from the DOM
    const content = document.querySelector('#content');

    // Create a 'menu' div element
    const menu = document.createElement('div');
    menu.id = 'menu'; // Set the ID of the menu div
    content.appendChild(menu); // Append the menu to the 'content' element
}

// Export the 'menu' function
export default menu;