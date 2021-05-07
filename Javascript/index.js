/* Global variables */
let body = document.querySelector('body');
let nav = document.querySelector('.nav');
const navCheck = document.querySelector('#nav__check')
const menuBtn = document.querySelector('.nav__menu-btn');
let navArrow = document.querySelectorAll('.nav__arrow');
let welcomeLink = document.querySelector('.nav__link--welcome');
let skillsLink = document.querySelector('.nav__link--skills');
let projectsLink = document.querySelector('.nav__link--projects');
let contactLink = document.querySelector('.nav__link--contact');
let welcomeSection = document.querySelector('.welcome');
let skillsSection = document.querySelector('.skills');
let projectsSection = document.querySelector('.projects');
let contactSection = document.querySelector('.contact');


/* remove nav arrow if in first section */
if(welcomeSection.getBoundingClientRect().top - 85  <= 0 &&
   skillsSection.getBoundingClientRect().top - 85  > 0) {
  welcomeLink.style.color = "#68e0cf";
  skillsLink.style.color = "#ffffff";

  navArrow[0].classList.add('hidden');
  console.log("ciao");
}

// activate preloader animation
setTimeout(function() {
  document.querySelector('.loader__bg-1').classList.add('timeout');
  document.querySelector('.loader__bg-2').classList.add('timeout');
}, 1000);

// close the menu and activate menu icon animation when a nav link is clicked
document.querySelectorAll('.nav__link').forEach(a => {
  a.addEventListener('click', function (e) {
    navCheck.checked = false;
    menuBtn.classList.remove('open');
  })
});

// activate the menu icon animation when the icon is clicked
menuBtn.addEventListener('click', () => {
  if(!navCheck.checked) {
    menuBtn.classList.add('open');
  } else {
    menuBtn.classList.remove('open');
  }
});

// open the project information page when a project box is clicked
document.querySelectorAll('.projects__box').forEach(box => {
  box.addEventListener('click', function (e) {
    body.style.overflow = "hidden";
    box.nextElementSibling.style.left = "0";
  })
});

// close the project information page when the close icon is clicked
document.querySelectorAll('.projects__close-img').forEach(icon => {
  icon.addEventListener('click', function (e) {
    body.style.overflow = "auto";
    document.querySelectorAll('.projects__info').forEach(project => {
      project.style.left = "-100%";
    });
  })
});

// do these things when the page is scrolled
window.addEventListener('scroll', function (e) {

  // change nav style when at the top of the page
  if(window.scrollY == 0) {
    nav.style.backgroundColor = "#373b40";
  } else {
    nav.style.backgroundColor = "#585d65";
  }

  // when scrolling the page, highlight nav links and toggle nav arrow relative to page sections
  if(welcomeSection.getBoundingClientRect().top - 85  <= 0 &&
     skillsSection.getBoundingClientRect().top - 85  > 0) {
    welcomeLink.style.color = "#68e0cf";
    skillsLink.style.color = "#ffffff";

    navArrow[0].classList.add('hidden');
  }
  else if(skillsSection.getBoundingClientRect().top - 85  <= 0 &&
          projectsSection.getBoundingClientRect().top - 85  > 0) {
    skillsLink.style.color = "#68e0cf";
    welcomeLink.style.color = "#ffffff";
    projectsLink.style.color = "#ffffff";

    navArrow[0].classList.remove('hidden');
  }
  else if(projectsSection.getBoundingClientRect().top - 85  <= 0 &&
          contactSection.getBoundingClientRect().top - 85  > 0) {
    projectsLink.style.color = "#68e0cf";
    skillsLink.style.color = "#ffffff";
    contactLink.style.color = "#ffffff";

    navArrow[0].classList.remove('hidden');
  }
  else if(contactSection.getBoundingClientRect().top - 85  <= 0) {
    contactLink.style.color = "#68e0cf";
    projectsLink.style.color = "#ffffff";

    navArrow[0].classList.remove('hidden');
  }
});

// change nav style when at the top of the page and menu is opened
document.querySelector('.nav__checkbtn').addEventListener('click', function (e) {
  let nav = document.querySelector('.nav');
  let check = document.querySelector('#nav__check').checked;

  if(window.scrollY == 0) {
    if(check)
      nav.style.backgroundColor = "#373b40";
    else
      nav.style.backgroundColor = "#585d65";
  }
});
