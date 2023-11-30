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

    // Create 2 div elements inside the 'aboutText' div
    const aboutText1 = document.createElement('div');
    const aboutText2 = document.createElement('div');
    aboutText.appendChild(aboutText1);
    aboutText.appendChild(aboutText2);

    // Create a 'h1' element inside the 'aboutText1' div
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Welcome to BiteHaus';
    aboutText1.appendChild(h1);

    // Create a 'p' element inside the 'aboutText1' div
    const p1 = document.createElement('p');
    p1.innerHTML = "At BiteHaus, we're not just about burgers; we're passionate about crafting quick, flavorful experiences that redefine your fast-food expectations. BiteHaus is your ultimate destination for mouthwatering burgers and speedy, delicious meals.";
    aboutText1.appendChild(p1);

    // Create a 'h1' element inside the 'aboutText1' div
    const h2 = document.createElement('h1');
    h2.innerHTML = 'Our Burger Story';
    aboutText1.appendChild(h2);

    // Create a 'p' element inside the 'aboutText1' div
    const p2 = document.createElement('p');
    p2.innerHTML = "BiteHaus started with a love for exceptional burgers that deliver taste, quality, and speed in every bite. Founded with a mission to revolutionize fast food, BiteHaus has been flipping patties and perfecting recipes to create a menu that combines classic flavors with innovative twists.";
    aboutText1.appendChild(p2);

    // Create a 'h1' element inside the 'aboutText1' div
    const h3 = document.createElement('h1');
    h3.innerHTML = 'Our Burger Lineup';
    aboutText1.appendChild(h3);

    // Create a 'p' element inside the 'aboutText1' div
    const p3 = document.createElement('p');
    p3.innerHTML = "Sink your teeth into our signature burgers, meticulously crafted with prime ingredients and bold flavors. From the timeless Classic Cheeseburger to adventurous options like [mention any unique or specialty burgers], our menu aims to tantalize your taste buds and leave you craving more.";
    aboutText1.appendChild(p3);

    // Create a 'h1' element inside the 'aboutText2' div
    const h4 = document.createElement('h1');
    h4.innerHTML = 'Fast, Flavorful, Fresh';
    aboutText2.appendChild(h4);

    // Create a 'p' element inside the 'aboutText2' div
    const p4 = document.createElement('p');
    p4.innerHTML = "At BiteHaus, we're committed to delivering freshness without compromising on speed. We take pride in using locally sourced, fresh ingredients to ensure that every burger is a delicious masterpiece served swiftly to your satisfaction.";
    aboutText2.appendChild(p4);

    // Create a 'h1' element inside the 'aboutText2' div
    const h5 = document.createElement('h1');
    h5.innerHTML = 'Our Commitment';
    aboutText2.appendChild(h5);

    // Create a 'p' element inside the 'aboutText2' div
    const p5 = document.createElement('p');
    p5.innerHTML = "Beyond crafting mouthwatering burgers, we're dedicated to providing an unparalleled fast-food experience. Our commitment to exceptional service and a welcoming atmosphere ensures that every visit to BiteHaus is more than just a meal; it's a moment of savory satisfaction.";
    aboutText2.appendChild(p5);

    // Create a 'h1' element inside the 'aboutText2' div
    const h6 = document.createElement('h1');
    h6.innerHTML = 'Join Us for a Quick Bite';
    aboutText2.appendChild(h6);

    // Create a 'p' element inside the 'aboutText2' div
    const p6 = document.createElement('p');
    p6.innerHTML = "Come and experience the speed, flavor, and joy of BiteHaus. Whether you're swinging by for a quick lunch break or grabbing a meal with friends and family, we're here to serve you fast, fresh, and fantastic food.";
    aboutText2.appendChild(p6);

    // Create a 'p' element inside the 'aboutText2' div
    const p7 = document.createElement('p');
    p7.innerHTML = "Thank you for choosing BiteHaus for your burger cravings!";
    aboutText2.appendChild(p7);
}

// Export the 'menu' function
export default about;