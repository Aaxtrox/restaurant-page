// Function to create a about element
const about = function () {
    // Get the 'content' element from the DOM
    const content = document.querySelector('#content');

    // Create a 'about' div element
    const about = document.createElement('div');
    about.id = 'about'; // Set the ID of the menu div
    content.appendChild(about); // Append the menu to the 'content' element
}

// Export the 'menu' function
export default about;