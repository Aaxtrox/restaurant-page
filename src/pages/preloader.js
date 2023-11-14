// Function to create a preloader element and initialize its content
const preloader = function () {
    // Get the 'content' element from the DOM
    const content = document.querySelector('#content');

    // Create a 'preloader' div element
    const preloader = document.createElement('div');
    preloader.id = 'preloader'; // Set the ID of the preloader div
    content.appendChild(preloader); // Append the preloader to the 'content' element
    
    // Create a 'loading' div element and set its content to 'Loading'
    const loading = document.createElement('div');
    loading.innerHTML = 'Loading';
    preloader.appendChild(loading); // Append the 'loading' div to the preloader
    
    // Create a 'spinner' div element and set its ID to 'spinner'
    const spinner = document.createElement('div');
    spinner.id = 'spinner'; // Set the ID of the spinner div
    preloader.appendChild(spinner); // Append the 'spinner' div to the preloader

    // Invoke the 'Preloader' function
    const loader = Preloader();
}

// 'Preloader' to handle adding the 'loader' class after window load
function Preloader() {
    // Get the preloader and spinner elements by their IDs
    const preloader = document.getElementById('preloader');
    const spinner = document.getElementById('spinner');

     // Function to add the 'loader' class to the preloader and spinner elements
    function addLoaderClass() {
        preloader.classList.add('loader'); // Add 'loader' class to preloader
        spinner.classList.add('loader'); // Add 'loader' class to spinner
    }

    // Add an event listener to invoke 'addLoaderClass' after the window is loaded
    window.addEventListener('load', addLoaderClass);
}

// Export the 'preloader' function
export default preloader;