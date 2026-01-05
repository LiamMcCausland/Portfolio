// Initialize typewriter
const jobTitle = document.getElementById('job-title');

const typewriter = new Typewriter(jobTitle, {
    loop: false,       // only type once
    delay: 120         // speed in ms per character
});

typewriter
    .typeString('Liam McCausland')
    .start();