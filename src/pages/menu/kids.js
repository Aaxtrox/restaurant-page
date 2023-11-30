// Importing images for kids menu items
import Chicken_Tenders from '../../assets/kids/Chicken_Tenders.png';
import Grilled_Cheese_Sandwich from '../../assets/kids/Grilled_Cheese_Sandwich.png';
import Mini_Cheeseburger from '../../assets/kids/Mini_Cheeseburger.png';
import Mini_Corn_Dogs from '../../assets/kids/Mini_Corn_Dogs.png';

// Array containing image source paths for kids menu items
const kidsMenuItems = [
    { imageSrc: Chicken_Tenders },
    { imageSrc: Grilled_Cheese_Sandwich },
    { imageSrc: Mini_Cheeseburger },
    { imageSrc: Mini_Corn_Dogs }
];

// Function to create the kids menu
const createKidsMenu = () => {
    // Selecting the container for the kids menu
    const menuKids = document.querySelector('.menu-kids');

    // Checking if the kids menu container exists
    if (menuKids) {
        // Loop through each kids menu item
        for (let i = 0; i < kidsMenuItems.length; i++) {
            // Create a div element for each item in the kids menu
            const kids = document.createElement('div');
            kids.classList.add('kids'); // Adding 'kids' class to the created div
            menuKids.appendChild(kids); // Appending the div to the kids menu container

            // Create an image element for the menu item
            const kidsImg = document.createElement('img');
            kidsImg.src = kidsMenuItems[i].imageSrc; // Set image source based on the array
            kids.appendChild(kidsImg); // Append the image to the corresponding div
        }
    }
};

export default createKidsMenu; // Exporting the createKidsMenu function