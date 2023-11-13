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
}

// Export the 'nav' function.
export default nav;