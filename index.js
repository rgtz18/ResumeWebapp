import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>HERE WE GO!!!!</h1>);

window.addEventListener("load", (event) => {
    $("#navHeader").load("navigation.html");
});