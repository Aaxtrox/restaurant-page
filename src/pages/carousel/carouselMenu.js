// Function for carousel menu
const carouselMenu = function () {
    // Selecting DOM elements
    const menu = document.querySelector('.menu-carousel');
    const menuItems = document.querySelectorAll('.carousel-menu-item');
    const prevArrow = document.querySelector('.arrow.prev');
    const nextArrow = document.querySelector('.arrow.next');

    // Initialize the current index as 1 (representing the initially active item)
    let currentIndex = 1; // Set "Burgers" as the initially active item

    // Function to update the carousel menu
    function updateMenu() {
        // Get dimensions of elements
        const containerWidth = menu.offsetWidth;
        const itemWidth = menuItems[0].offsetWidth;
        const activeItemWidth = menuItems[currentIndex].offsetWidth;

        // Calculate the scroll amount based on current index and item widths
        let scrollAmount = 0;
        if (currentIndex >= 0) {
            const prevItemsWidth = Array.from(menuItems)
                .slice(0, currentIndex)
                .reduce((acc, item) => acc + item.offsetWidth, 0);
            scrollAmount = (containerWidth - activeItemWidth) / 2 - prevItemsWidth;
        }

        // Apply transform to the menu to show active item
        menu.style.transform = `translateX(${scrollAmount}px)`;

        // Add/remove 'active' class to items based on current index
        menuItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Set opacity for nearby items for a different visual effect
        if (currentIndex + 2 < menuItems.length) {
            menuItems[currentIndex + 2].style.opacity = 0;
        }
        if (currentIndex - 2 >= 0) {
            menuItems[currentIndex - 2].style.opacity = 0;
        }
        if (currentIndex + 1 < menuItems.length) {
            menuItems[currentIndex + 1].style.opacity = 0.7;
        }
        if (currentIndex - 1 >= 0) {
            menuItems[currentIndex - 1].style.opacity = 0.7;
        }
        menuItems[currentIndex].style.opacity = 1;          
    }

    // Function to go to the next item in the carousel
    function goToNext() {
        if (currentIndex < menuItems.length -1) {
            currentIndex++;
            updateMenu();
        }
    }

    // Function to go to the previous item in the carousel
    function goToPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateMenu();
        }
    }

    // Event listeners for next and previous arrows
    nextArrow.addEventListener('click', goToNext);
    prevArrow.addEventListener('click', goToPrev);

    // Initial update of the menu
    updateMenu();
};

// Exporting the carouselMenu function
export default carouselMenu;