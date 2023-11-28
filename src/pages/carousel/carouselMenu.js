const carouselMenu = function () {
    const menu = document.querySelector('.menu-carousel');
    const menuItems = document.querySelectorAll('.carousel-menu-item');
    const prevArrow = document.querySelector('.arrow.prev');
    const nextArrow = document.querySelector('.arrow.next');
  
    let currentIndex = 1; // Set "Burgers" as the initially active item
  
    function updateMenu() {
        const containerWidth = menu.offsetWidth;
        const itemWidth = menuItems[0].offsetWidth;
        const activeItemWidth = menuItems[currentIndex].offsetWidth;
  
        let scrollAmount = 0;
        if (currentIndex >= 0) {
            const prevItemsWidth = Array.from(menuItems)
                .slice(0, currentIndex)
                .reduce((acc, item) => acc + item.offsetWidth, 0);
            scrollAmount = (containerWidth - activeItemWidth) / 2 - prevItemsWidth;
        }
  
        menu.style.transform = `translateX(${scrollAmount}px)`;
  
        menuItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

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
  
    function goToNext() {
        if (currentIndex < menuItems.length - 1) {
            currentIndex++;
            updateMenu();
        }
    }
  
    function goToPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateMenu();
        }
    }
  
    nextArrow.addEventListener('click', goToNext);
    prevArrow.addEventListener('click', goToPrev);
  
    updateMenu();
};

export default carouselMenu;