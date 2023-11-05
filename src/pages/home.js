import background from '../assets/background.png';

const home = function () {
    //grab the content div
    const content = document.querySelector('#content');
    //create div with id of home
    const home = document.createElement('div');
    home.id = 'home';
    // put the background image in the div
    home.style.backgroundImage = `url(${background})`;
    // push the div to the content div
    content.appendChild(home);
}

export default home;