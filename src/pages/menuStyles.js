// Function to apply styles based on DOM changes
const menuStyles = function () {
    // DOM elements selection
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const about = document.querySelector('#about');

    const menuHam = document.querySelector('.menuHam');
    const links = document.querySelectorAll('.menu-item > a');
    const ham = document.querySelector('.ham');
    const lines = document.querySelectorAll('.line');

    const btn = document.querySelector('.btn');

    // Mutation Observer to detect changes in the DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {      
                // Apply styles based on the added node's ID 
                if (node.id === 'home') {
                    // Styles for 'home' content
                    links.forEach((link) => {
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
                    // Styles for 'menu' or 'about' content
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

    // Observer starts observing the changes when the DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        observer.observe(document.querySelector('#content'), {
            childList: true, // Observe direct child nodes
            subtree: true // Observe all descendants of the target node
        });
    });

    // Applying styles based on certain conditions
    if (menuHam) {
        if (menuHam.classList.contains('active')) {
            // Styles when menuHam has 'active' class
            lines.forEach((line) => {
                line.style.stroke = 'black';
            });
        } else if (!menuHam.classList.contains('active') && home) {
            // Styles when menuHam doesn't have 'active' class and 'home' exists
            lines.forEach((line) => {
                setTimeout(() => {
                    line.style.stroke = 'white';
                }, 300);
            });
        }
    }
}

// Export the 'menuStyles' function
export default menuStyles;