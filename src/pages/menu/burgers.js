// Importing burger images
import Bacon_BBQ_Burger from '../../assets/burgers/Bacon_BBQ_Burger.png';
import Breakfast_Burger from '../../assets/burgers/Breakfast_Burger.png';
import Classic_Cheeseburger from '../../assets/burgers/Classic_Cheeseburger.png';
import Hawaiian_Luau_Burger from '../../assets/burgers/Hawaiian_Luau_Burger.png';
import Jalapeo_Pepperjack_Burger from '../../assets/burgers/Jalapeo_Pepperjack_Burger.png';
import Mushroom_Swiss_Burger from '../../assets/burgers/Mushroom_Swiss_Burger.png';
import Southwest_Chipotle_Burger from '../../assets/burgers/Southwest_Chipotle_Burger.png';
import Veggie_Burger from '../../assets/burgers/Veggie_Burger.png';

// Function to create and display burgers menu
const menuBurgers = function () {
    // Array of burger images
    const burgerImages = [
        Bacon_BBQ_Burger,
        Breakfast_Burger,
        Classic_Cheeseburger,
        Hawaiian_Luau_Burger,
        Jalapeo_Pepperjack_Burger,
        Mushroom_Swiss_Burger,
        Southwest_Chipotle_Burger,
        Veggie_Burger
    ];

    // Get the 'menu-burgers' element from the DOM
    const menuBurgersContainer = document.querySelector('.menu-burgers');

    // Loop to create 8 burger divs
    if (menuBurgersContainer) {
        // Loop to create 8 burger divs
        for (let i = 0; i < 8; i++) {
            const burgerDiv = document.createElement('div');
            burgerDiv.classList.add('burger');
            menuBurgersContainer.appendChild(burgerDiv);

            // Add burger image
            const burgerImg = document.createElement('img');
            burgerImg.src = burgerImages[i];
            burgerDiv.appendChild(burgerImg);
        }
    }
}

// Exporting the menuBurgers function
export default menuBurgers;