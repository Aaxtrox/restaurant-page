const menuStyles = function () {
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const about = document.querySelector('#about');

    const menuHam = document.querySelector('.menuHam');
    const links = document.querySelectorAll('.menu-item > a');
    const ham = document.querySelector('.ham');
    const lines = document.querySelectorAll('.line');

    const btn = document.querySelector('.btn');

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {       
                if (node.id === 'home') {
                    links.forEach((link) => {
                        console.log('home');
                        link.style.color = 'white';
                    });
                    if (ham) {
                        setTimeout(() => {
                            lines.forEach((line) => {
                                line.style.stroke = 'white';
                            });
                        }, 300);
                        links.forEach((link) => {
                            link.style.color = 'white';
                        });
                    }
                } else if (node.id === 'menu' || node.id === 'about') {
                    console.log(mutation.target.id);
                    links.forEach((link) => {
                        link.style.color = 'black';
                    });
                    if (ham) {
                        lines.forEach((line) => {
                            line.style.stroke = 'black';
                        });
                    }
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

    if (menuHam) {
        if (menuHam.classList.contains('active')) {
            lines.forEach((line) => {
                line.style.stroke = 'black';
            });
        }
    }
}


export default menuStyles;