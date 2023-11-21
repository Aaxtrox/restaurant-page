const menuStyles = function () {
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const about = document.querySelector('#about');

    const links = document.querySelectorAll('a');
    const ham = document.querySelector('.ham');

    const btn = document.querySelector('.btn');

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {       
                if (node.id === 'home') {
                    links.forEach((link) => {
                        console.log('home');
                        link.style.color = 'white';
                    });
                } else if (node.id === 'menu' || node.id === 'about') {
                    console.log(mutation.target.id);
                    links.forEach((link) => {
                        link.style.color = 'black';
                    });
                }
            });
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        observer.observe(document.querySelector('#content'), {
            childList: true,
            subtree: true
        });
    });
}


export default menuStyles;