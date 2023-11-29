import Bruschetta_Slices_of_toasted_baguette from '../../assets/starters/Bruschetta_Slices_of_toasted_baguette.png';
import Chicken_Wings from '../../assets/starters/Chicken_Wings.png';
import Fried_Pickles_Crispy_breaded_pickle_chips from '../../assets/starters/Fried_Pickles_Crispy_breaded_pickle_chips.png';
import Loaded_Nachos from '../../assets/starters/Loaded_Nachos.png';
import Mozzarella_Sticks from '../../assets/starters/Mozzarella_Sticks.png';
import Spinach_and_Artichoke_Dip from '../../assets/starters/Spinach_and_Artichoke_Dip.png';

const menuStarters = function () {
    const menuStarters = document.querySelector('.menu-starters');

    if (menuStarters) {
        for (let i = 0; i < 6; i++) {
            const starters = document.createElement('div');
            starters.classList.add('starters');
            menuStarters.appendChild(starters);
        }
    }

    const starters1 = document.querySelector('.starters:nth-child(1)');
    const starters1Img = document.createElement('img');
    starters1Img.src = Bruschetta_Slices_of_toasted_baguette;
    starters1.appendChild(starters1Img);

    const starters2 = document.querySelector('.starters:nth-child(2)');
    const starters2Img = document.createElement('img');
    starters2Img.src = Chicken_Wings;
    starters2.appendChild(starters2Img);

    const starters3 = document.querySelector('.starters:nth-child(3)');
    const starters3Img = document.createElement('img');
    starters3Img.src = Fried_Pickles_Crispy_breaded_pickle_chips;
    starters3.appendChild(starters3Img);

    const starters4 = document.querySelector('.starters:nth-child(4)');
    const starters4Img = document.createElement('img');
    starters4Img.src = Loaded_Nachos;
    starters4.appendChild(starters4Img);

    const starters5 = document.querySelector('.starters:nth-child(5)');
    const starters5Img = document.createElement('img');
    starters5Img.src = Mozzarella_Sticks;
    starters5.appendChild(starters5Img);

    const starters6 = document.querySelector('.starters:nth-child(6)');
    const starters6Img = document.createElement('img');
    starters6Img.src = Spinach_and_Artichoke_Dip;
    starters6.appendChild(starters6Img);
}

export default menuStarters;