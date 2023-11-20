// Import CSS files for styling.
import './normalize.css';  // Reset default styles.
import './styles.css';     // Apply custom styles.

// Import functions from other modules.
import preloader from './pages/preloader';
import nav from './pages/nav';
import home from './pages/home';

// Invoke the 'preloader' and 'home' functions.
preloader();
nav();
home();