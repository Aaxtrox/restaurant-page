// Import the 'background' image from the specified file path.
import background from '../assets/background1.png';

// Import the 'menu' function from the specified file path.
import menu from './menu';

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

    // Create a new <div> element
    const heroText = document.createElement('div');

    // Assign the id attribute to the newly created element
    heroText.id = 'hero-text';

    // Append the 'heroText' element as a child to the 'home' element
    home.appendChild(heroText);

    // Create a new <h1> element, inside the 'heroText' element
    const heroTitle = document.createElement('h1');

    // Set the innerHTML of the 'heroTitle' element
    heroTitle.innerHTML = 'Get Ready for Burger Heaven';

    // Create a new <h2> element, inside the 'heroText' element
    const heroSubtitle = document.createElement('h2');

    // Set the innerHTML of the 'heroSubtitle' element
    heroSubtitle.innerHTML = 'Where Taste Takes the Spotlight!';

    // Append the 'heroTitle' element as a child to the 'heroText' element
    heroText.appendChild(heroTitle);

    // Append the 'heroSubtitle' element as a child to the 'heroText' element
    heroText.appendChild(heroSubtitle);

    // Create a new div element inside the 'heroText' element
    const btnWrapper = document.createElement('div');

    // Assign the id attribute to the newly created element
    btnWrapper.classList.add('btn-wrapper');

    // Append the 'btnWrapper' element as a child to the 'heroText' element
    heroText.appendChild(btnWrapper);

    // Create a new div element inside the 'btnWrapper' element
    const btn = document.createElement('div');

    // Assign the id attribute 'btn btn--border btn--primary btn--animated' to the newly created element
    btn.classList.add('btn', 'btn--border', 'btn--primary', 'btn--animated');

    // Set the innerHTML of the 'btn' element
    btn.innerHTML = 'Order Now';

    // Append the 'btn' element as a child to the 'btnWrapper' element
    btnWrapper.appendChild(btn);

    // Add an event listener to the 'btn' element
    btn.addEventListener('click', () => {
        // Check if the last child of '#content' is not 'menu'
        if (document.querySelector('#content').lastChild.id !== 'menu') {
            // Remove the current last child of '#content'
            document.querySelector('#content').removeChild(document.querySelector('#content').lastChild);


            // Select all elements with class 'menu-item'
            const menuItems = document.querySelectorAll('.menu-item');

            // Loop through each 'menu-item' element
            menuItems.forEach((item) => {
                // Access the first child element of each 'menu-item' and change its text color to black
                item.firstChild.style.color = 'black';
            });

            // Select the 'ham' element
            const ham = document.querySelector('.ham');

            // Check if the 'ham' element exists
            if (ham) {
                const lanes = document.querySelectorAll('.line');

                // Loop through each 'line' element
                lanes.forEach((lane) => {
                    // Change the color of each line to black
                    lane.style.stroke = 'black';
                });
            }

            // Call the 'menu' function to display the 'menu' section
            menu();
        }
    });
}

// Export the 'home' function as the default export of this module.
export default home;
