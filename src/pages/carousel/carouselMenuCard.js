const carouselMenuCard = function () {
    const menuCarousel = document.querySelector('.menu-carousel');

    if (menuCarousel) {
        loopCarousel();

        const prevArrow = document.querySelector('.arrow.prev');
        const nextArrow = document.querySelector('.arrow.next');

        prevArrow.addEventListener('click', () => {
            loopCarousel();
        });

        nextArrow.addEventListener('click', () => {
            loopCarousel();
        });
    }
}

function loopCarousel () {
    const carouselMenuItems = document.querySelectorAll('.carousel-menu-item');

    carouselMenuItems.forEach((item) => {
        if (item.classList.contains('active')) {
            console.log(item.innerText);
        }
    });
}

export default carouselMenuCard;