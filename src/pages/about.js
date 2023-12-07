// Function to create a paragraph element
const createParagraph = (text) => {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    return paragraph;
};

// Function to create a heading element
const createHeading = (level, text) => {
    const heading = document.createElement(`h${level}`);
    heading.innerHTML = text;
    return heading;
};

// Function to create the 'About' section
const createAboutSection = () => {
    // Get the 'content' element from the DOM
    const content = document.querySelector('#content');

    // Check if the 'content' element exists
    if (!content) {
        console.error("Content element not found");
        return;
    }

    // Create a 'section' element for the 'About' section
    const aboutSection = document.createElement('section');
    aboutSection.id = 'aboutSection';
    content.appendChild(aboutSection);

    // Create a 'div' element to contain the 'About' section content
    const about = document.createElement('div');
    about.id = 'about';
    aboutSection.appendChild(about);

    // Create a 'div' element to contain the text content of the 'About' section
    const aboutText = document.createElement('div');
    aboutText.id = 'aboutText';
    about.appendChild(aboutText);

    // Create sub-divs within 'aboutText' to organize content
    const aboutText1 = document.createElement('div');
    const aboutText2 = document.createElement('div');
    aboutText.appendChild(aboutText1);
    aboutText.appendChild(aboutText2);

    // Populate 'aboutText1' with headings and paragraphs
    aboutText1.appendChild(createHeading(1, 'Welcome to BiteHaus'));
    aboutText1.appendChild(createParagraph("At BiteHaus, we're not just about burgers; we're passionate about crafting quick, flavorful experiences that redefine your fast-food expectations. BiteHaus is your ultimate destination for mouthwatering burgers and speedy, delicious meals."));

    aboutText1.appendChild(createHeading(1, 'Our Burger Story'));
    aboutText1.appendChild(createParagraph("BiteHaus started with a love for exceptional burgers that deliver taste, quality, and speed in every bite. Founded with a mission to revolutionize fast food, BiteHaus has been flipping patties and perfecting recipes to create a menu that combines classic flavors with innovative twists."));

    aboutText1.appendChild(createHeading(1, 'Our Burger Lineup'));
    aboutText1.appendChild(createParagraph("Sink your teeth into our signature burgers, meticulously crafted with prime ingredients and bold flavors. From the timeless Classic Cheeseburger to adventurous options like Bacon BBQ Burger, our menu aims to tantalize your taste buds and leave you craving more."));

    // Populate 'aboutText2' with headings and paragraphs
    aboutText2.appendChild(createHeading(1, 'Fast, Flavorful, Fresh'));
    aboutText2.appendChild(createParagraph("At BiteHaus, we're committed to delivering freshness without compromising on speed. We take pride in using locally sourced, fresh ingredients to ensure that every burger is a delicious masterpiece served swiftly to your satisfaction."));

    aboutText2.appendChild(createHeading(1, 'Our Commitment'));
    aboutText2.appendChild(createParagraph("Beyond crafting mouthwatering burgers, we're dedicated to providing an unparalleled fast-food experience. Our commitment to exceptional service and a welcoming atmosphere ensures that every visit to BiteHaus is more than just a meal; it's a moment of savory satisfaction."));

    aboutText2.appendChild(createHeading(1, 'Join Us for a Quick Bite'));
    aboutText2.appendChild(createParagraph("Come and experience the speed, flavor, and joy of BiteHaus. Whether you're swinging by for a quick lunch break or grabbing a meal with friends and family, we're here to serve you fast, fresh, and fantastic food."));
    aboutText2.appendChild(createParagraph("Thank you for choosing BiteHaus for your burger cravings!"));
};

// Export the 'createAboutSection' function
export default createAboutSection;
