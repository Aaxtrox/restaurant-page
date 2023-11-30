// Import the 'logo' image from the specified file path.
import logo from '../assets/logo.png';

// Function to create a about element
const about = function () {
    // Get the 'content' element from the DOM
    const content = document.querySelector('#content');

    // Create a 'about' div element
    const about = document.createElement('div');
    about.id = 'about'; // Set the ID of the menu div
    content.appendChild(about); // Append the menu to the 'content' element

    // Create a 'logo' img element
    const logoImg = document.createElement('img');
    logoImg.src = logo; // Set the source of the image
    logoImg.alt = 'Logo'; // Set the alt text of the image
    about.appendChild(logoImg); // Append the image to the 'about' element

    // Create a 'aboutText' div element
    const aboutText = document.createElement('div');
    aboutText.id = 'aboutText'; // Set the ID of the 'aboutText' div
    about.appendChild(aboutText); // Append the 'aboutText' div to the 'about' element
}

// Export the 'menu' function
export default about;