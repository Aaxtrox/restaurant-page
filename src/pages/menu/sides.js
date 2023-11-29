import Coleslaw from '../../assets/sides/Coleslaw.png';
import French_Fries from '../../assets/sides/French_Fries.png';
import Loaded_Tater_Tots from '../../assets/sides/Loaded_Tater_Tots.png';
import Onion_Rings from '../../assets/sides/Onion_Rings.png';
import Side_Salad from '../../assets/sides/Side_Salad.png';
import Sweet_Potato_Fries from '../../assets/sides/Sweet_Potato_Fries.png';

const menuSides = function () {
    const menuSides = document.querySelector('.menu-sides');

    if (menuSides) {
        for (let i = 0; i < 6; i++) {
            const sides = document.createElement('div');
            sides.classList.add('sides');
            menuSides.appendChild(sides);
        }
    }

    const sides1 = document.querySelector('.sides:nth-child(1)');
    const sides1Img = document.createElement('img');
    sides1Img.src = Coleslaw;
    sides1.appendChild(sides1Img);

    const sides2 = document.querySelector('.sides:nth-child(2)');
    const sides2Img = document.createElement('img');
    sides2Img.src = French_Fries;
    sides2.appendChild(sides2Img);

    const sides3 = document.querySelector('.sides:nth-child(3)');
    const sides3Img = document.createElement('img');
    sides3Img.src = Loaded_Tater_Tots;
    sides3.appendChild(sides3Img);

    const sides4 = document.querySelector('.sides:nth-child(4)');
    const sides4Img = document.createElement('img');
    sides4Img.src = Onion_Rings;
    sides4.appendChild(sides4Img);

    const sides5 = document.querySelector('.sides:nth-child(5)');
    const sides5Img = document.createElement('img');
    sides5Img.src = Side_Salad;
    sides5.appendChild(sides5Img);

    const sides6 = document.querySelector('.sides:nth-child(6)');
    const sides6Img = document.createElement('img');
    sides6Img.src = Sweet_Potato_Fries;
    sides6.appendChild(sides6Img);
}

export default menuSides;