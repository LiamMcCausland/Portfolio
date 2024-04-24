const section1 = document.getElementsByClassName(".section-1");

function scrollToHome() {
  document.querySelector('.home').scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToAbout() {
  document.querySelector('.about').scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToProjects() {
  document.querySelector('.projects').scrollIntoView({
    behavior: 'smooth'
  });
}