// activate preloader animation
setTimeout(function() {
  document.querySelector('.loader-bg-1').classList.add('timeout');
  document.querySelector('.loader-bg-2').classList.add('timeout');
}, 1000);

// close the menu when the menu icon is clicked
document.querySelectorAll('a[href*="section"]').forEach(a => {
  a.addEventListener('click', function (e) {
    document.querySelector('#check').checked = false;
  })
});

// open the project information page when a project box is clicked
document.querySelectorAll('.project-box').forEach(box => {
  box.addEventListener('click', function (e) {
    document.querySelector('body').style.overflow = "hidden";
    e.target.parentElement.parentElement.nextElementSibling.style.left = "0";
  })
});

// close the project information page when the close icon is clicked
document.querySelectorAll('.close-img').forEach(icon => {
  icon.addEventListener('click', function (e) {
    document.querySelector('body').style.overflow = "auto";
    e.target.parentElement.style.left = "-100%";
  })
});

// do these things when the page is scrolled
window.addEventListener('scroll', function (e) {
  let nav = document.querySelector('nav');

  let welcomeLink = document.querySelector('a[href="#welcome-section"]');
  let skillsLink = document.querySelector('a[href="#skills-section"]');
  let projectsLink = document.querySelector('a[href="#projects-section"]');
  let resumeLink = document.querySelector('a[href="#resume-section"]');
  let contactLink = document.querySelector('a[href="#contact-section"]');

  let welcomeSection = document.querySelector('.welcome-section');
  let skillsSection = document.querySelector('.skills-section');
  let projectsSection = document.querySelector('.projects-section');
  let resumeSection = document.querySelector('.resume-section');
  let contactSection = document.querySelector('.contact-section');

  // change nav style when at the top of the page
  if(window.scrollY == 0) {
    nav.style.backgroundColor = "#373b40";
  } else {
    nav.style.backgroundColor = "#585d65";
  }

  // highlight nsv links relative to page sections when scrolling the page
  if(welcomeSection.getBoundingClientRect().top - 85  <= 0 &&
     skillsSection.getBoundingClientRect().top - 85  > 0) {
    welcomeLink.style.color = "#68e0cf";
    skillsLink.style.color = "#ffffff";
  }
  else if(skillsSection.getBoundingClientRect().top - 85  <= 0 &&
          projectsSection.getBoundingClientRect().top - 85  > 0) {
    skillsLink.style.color = "#68e0cf";
    welcomeLink.style.color = "#ffffff";
    projectsLink.style.color = "#ffffff";
  }
  else if(projectsSection.getBoundingClientRect().top - 85  <= 0 &&
          resumeSection.getBoundingClientRect().top - 85  > 0) {
    projectsLink.style.color = "#68e0cf";
    skillsLink.style.color = "#ffffff";
    resumeLink.style.color = "#ffffff";
  }
  else if(resumeSection.getBoundingClientRect().top - 85  <= 0 &&
          contactSection.getBoundingClientRect().top - 85  > 0) {
    resumeLink.style.color = "#68e0cf";
    projectsLink.style.color = "#ffffff";
    contactLink.style.color = "#ffffff";
  }
  else if(contactSection.getBoundingClientRect().top - 85  <= 0) {
    contactLink.style.color = "#68e0cf";
    resumeLink.style.color = "#ffffff";
  }
});

// change nav style when at the top of the page and menu is opened
document.querySelector('.checkbtn').addEventListener('click', function (e) {
  let nav = document.querySelector('nav');
  let check = document.querySelector('#check').checked;

  if(window.scrollY == 0) {
    if(check)
      nav.style.backgroundColor = "#373b40";
    else
      nav.style.backgroundColor = "#585d65";
  }
});

// activate the menu icon animation
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
