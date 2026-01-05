// Map numbers to section selectors
const sections = {
  1: '.home',
  2: '.about',
  3: '.projects'
};

// Generic scroll function
function scrollToSection(number) {
  const sectionSelector = sections[number];
  if (sectionSelector) {
    document.querySelector(sectionSelector).scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    console.warn('No section for number:', number);
  }
}

// Listen for key presses
document.addEventListener('keydown', (event) => {
  const key = event.key; // This is the character of the key pressed
  if (['1', '2', '3'].includes(key)) {
    scrollToSection(parseInt(key));
  }
});
