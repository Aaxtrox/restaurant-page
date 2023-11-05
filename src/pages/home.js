// Import the 'background' image from the specified file path.
import background from '../assets/background.png';

// Define a function named 'home'.
const home = function () {
    // Find the HTML element with the id 'content' and store it in the 'content' variable.
    const content = document.querySelector('#content');

    // Create a new 'div' element and store it in the 'home' variable.
    const home = document.createElement('div');

    // Set the 'id' attribute of the 'home' div to 'home'.
    home.id = 'home';

    // Set the 'backgroundImage' style property of the 'home' div
    // to display the imported 'background' image as the background.
    home.style.backgroundImage = `url(${background})`;

    // Append the 'home' div as a child to the 'content' element.
    content.appendChild(home);
}

// Export the 'home' function as the default export of this module.
export default home;
