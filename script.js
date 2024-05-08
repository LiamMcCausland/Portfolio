// Get the reference to the div element
var div = document.getElementById('resume-button');

// Add an event listener to handle the click event
div.addEventListener('click', function () {
    // Define the URL you want to open in a new tab
    var url = 'assets/resume2024.pdf';
    // Open the URL in a new tab
    window.open(url);
});
