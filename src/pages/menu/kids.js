import Chicken_Tenders from '../../assets/kids/Chicken_Tenders.png';
import Grilled_Cheese_Sandwich from '../../assets/kids/Grilled_Cheese_Sandwich.png';
import Mini_Cheeseburger from '../../assets/kids/Mini_Cheeseburger.png';
import Mini_Corn_Dogs from '../../assets/kids/Mini_Corn_Dogs.png';

const menuKids = function () {
    const menuKids = document.querySelector('.menu-kids');

    if (menuKids) {
        for (let i = 0; i < 4; i++) {
            const kids = document.createElement('div');
            kids.classList.add('kids');
            menuKids.appendChild(kids);
        }
    }

    const kids1 = document.querySelector('.kids:nth-child(1)');
    const kids1Img = document.createElement('img');
    kids1Img.src = Chicken_Tenders;
    kids1.appendChild(kids1Img);

    const kids2 = document.querySelector('.kids:nth-child(2)');
    const kids2Img = document.createElement('img');
    kids2Img.src = Grilled_Cheese_Sandwich;
    kids2.appendChild(kids2Img);

    const kids3 = document.querySelector('.kids:nth-child(3)');
    const kids3Img = document.createElement('img');
    kids3Img.src = Mini_Cheeseburger;
    kids3.appendChild(kids3Img);

    const kids4 = document.querySelector('.kids:nth-child(4)');
    const kids4Img = document.createElement('img');
    kids4Img.src = Mini_Corn_Dogs;
    kids4.appendChild(kids4Img);
}

export default menuKids;