// Importing images for starter menu items
import Bruschetta_Slices_of_toasted_baguette from '../../assets/starters/Bruschetta_Slices_of_toasted_baguette.png';
import Chicken_Wings from '../../assets/starters/Chicken_Wings.png';
import Fried_Pickles_Crispy_breaded_pickle_chips from '../../assets/starters/Fried_Pickles_Crispy_breaded_pickle_chips.png';
import Loaded_Nachos from '../../assets/starters/Loaded_Nachos.png';
import Mozzarella_Sticks from '../../assets/starters/Mozzarella_Sticks.png';
import Spinach_and_Artichoke_Dip from '../../assets/starters/Spinach_and_Artichoke_Dip.png';

// Array containing image source paths for starter menu items
const starterMenuItems = [
    { imageSrc: Bruschetta_Slices_of_toasted_baguette },
    { imageSrc: Chicken_Wings },
    { imageSrc: Fried_Pickles_Crispy_breaded_pickle_chips },
    { imageSrc: Loaded_Nachos },
    { imageSrc: Mozzarella_Sticks },
    { imageSrc: Spinach_and_Artichoke_Dip }
];

// Array of starter menu item names
const starterMenuNames = [
    'Bruschetta',
    'Chicken Wings',
    'Fried Pickles',
    'Loaded Nachos',
    'Mozzarella Sticks',
    'Spinach and Artichoke Dip'
];

// Function to create the starters menu
const createStartersMenu = () => {
    // Selecting the container for the starters menu
    const menuStarters = document.querySelector('.menu-starters');

    // Checking if the starters menu container exists
    if (menuStarters) {
        // Loop through each starter menu item
        for (let i = 0; i < starterMenuItems.length; i++) {
            // Create a div element for each item in the starters menu
            const starters = document.createElement('div');
            starters.classList.add('starters'); // Adding 'starters' class to the created div
            menuStarters.appendChild(starters); // Appending the div to the starters menu container

            // Create an image element for the menu item
            const startersImg = document.createElement('img');
            startersImg.src = starterMenuItems[i].imageSrc; // Set image source based on the array
            starters.appendChild(startersImg); // Append the image to the corresponding div

            // Add starters menu item name
            const startersName = document.createElement('p');
            startersName.classList.add('starters-name');
            startersName.innerHTML = starterMenuNames[i];
            starters.appendChild(startersName);
        }
    }
};

export default createStartersMenu; // Exporting the createStartersMenu function
