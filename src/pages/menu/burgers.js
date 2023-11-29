import Bacon_BBQ_Burger from '../../assets/burgers/Bacon_BBQ_Burger.png';
import Breakfast_Burger from '../../assets/burgers/Breakfast_Burger.png';
import Classic_Cheeseburger from '../../assets/burgers/Classic_Cheeseburger.png';
import Hawaiian_Luau_Burger from '../../assets/burgers/Hawaiian_Luau_Burger.png';
import Jalapeo_Pepperjack_Burger from '../../assets/burgers/Jalapeo_Pepperjack_Burger.png';
import Mushroom_Swiss_Burger from '../../assets/burgers/Mushroom_Swiss_Burger.png';
import Southwest_Chipotle_Burger from '../../assets/burgers/Southwest_Chipotle_Burger.png';
import Veggie_Burger from '../../assets/burgers/Veggie_Burger.png';

const menuBurgers = function () {
    const menuBurgers = document.querySelector('.menu-burgers');

    if (menuBurgers) {
        for (let i = 0; i < 8; i++) {
            const burger = document.createElement('div');
            burger.classList.add('burger');
            menuBurgers.appendChild(burger);
        }
    }

    const burger1 = document.querySelector('.burger:nth-child(1)');
    const burger1Img = document.createElement('img');
    burger1Img.src = Bacon_BBQ_Burger;
    burger1.appendChild(burger1Img);

    const burger2 = document.querySelector('.burger:nth-child(2)');
    const burger2Img = document.createElement('img');
    burger2Img.src = Breakfast_Burger;
    burger2.appendChild(burger2Img);

    const burger3 = document.querySelector('.burger:nth-child(3)');
    const burger3Img = document.createElement('img');
    burger3Img.src = Classic_Cheeseburger;
    burger3.appendChild(burger3Img);

    const burger4 = document.querySelector('.burger:nth-child(4)');
    const burger4Img = document.createElement('img');
    burger4Img.src = Hawaiian_Luau_Burger;
    burger4.appendChild(burger4Img);

    const burger5 = document.querySelector('.burger:nth-child(5)');
    const burger5Img = document.createElement('img');
    burger5Img.src = Jalapeo_Pepperjack_Burger;
    burger5.appendChild(burger5Img);

    const burger6 = document.querySelector('.burger:nth-child(6)');
    const burger6Img = document.createElement('img');
    burger6Img.src = Mushroom_Swiss_Burger;
    burger6.appendChild(burger6Img);

    const burger7 = document.querySelector('.burger:nth-child(7)');
    const burger7Img = document.createElement('img');
    burger7Img.src = Southwest_Chipotle_Burger;
    burger7.appendChild(burger7Img);

    const burger8 = document.querySelector('.burger:nth-child(8)');
    const burger8Img = document.createElement('img');
    burger8Img.src = Veggie_Burger;
    burger8.appendChild(burger8Img);
}

export default menuBurgers;