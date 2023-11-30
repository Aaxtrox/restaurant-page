// Importing images for side menu items
import Coleslaw from '../../assets/sides/Coleslaw.png';
import French_Fries from '../../assets/sides/French_Fries.png';
import Loaded_Tater_Tots from '../../assets/sides/Loaded_Tater_Tots.png';
import Onion_Rings from '../../assets/sides/Onion_Rings.png';
import Side_Salad from '../../assets/sides/Side_Salad.png';
import Sweet_Potato_Fries from '../../assets/sides/Sweet_Potato_Fries.png';

// Array containing image source paths for side menu items
const sideMenuItems = [
    { imageSrc: Coleslaw },
    { imageSrc: French_Fries },
    { imageSrc: Loaded_Tater_Tots },
    { imageSrc: Onion_Rings },
    { imageSrc: Side_Salad },
    { imageSrc: Sweet_Potato_Fries }
];

// Array of side menu item names
const sideMenuNames = [
    'Coleslaw',
    'French Fries',
    'Loaded Tater Tots',
    'Onion Rings',
    'Side Salad',
    'Sweet Potato Fries'
];

// Function to create the sides menu
const createSidesMenu = () => {
    // Selecting the container for the sides menu
    const menuSides = document.querySelector('.menu-sides');

    // Checking if the sides menu container exists
    if (menuSides) {
        // Loop through each side menu item
        for (let i = 0; i < sideMenuItems.length; i++) {
            // Create a div element for each item in the sides menu
            const sides = document.createElement('div');
            sides.classList.add('sides'); // Adding 'sides' class to the created div
            menuSides.appendChild(sides); // Appending the div to the sides menu container

            // Create an image element for the menu item
            const sidesImg = document.createElement('img');
            sidesImg.src = sideMenuItems[i].imageSrc; // Set image source based on the array
            sides.appendChild(sidesImg); // Append the image to the corresponding div

            // Add side menu item name
            const sidesName = document.createElement('p');
            sidesName.classList.add('sides-name');
            sidesName.innerHTML = sideMenuNames[i];
            sides.appendChild(sidesName);
        }
    }
};

export default createSidesMenu; // Exporting the createSidesMenu function
