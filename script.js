// Typing Effect
const typing = document.getElementById('type');
// const loader = document.getElementById('loader');
const fadeIn = document.querySelectorAll('.fadein');

const typewriter = new Typewriter(typing, {
  loop: false,
});

typewriter.typeString('Ayaka Bando,').typeString('<br>Web Developer,').start();

// Scroll Smoothly to a certain element
const innerLinks = document.querySelectorAll('.nav-right .nav-right-cont a');
// Hamburger Menu
const navRight = document.querySelector('.nav-right');
const toggleBtn = document.querySelector('.toggle-button');
const navBgColor = document.querySelector('.navigation_nav');
const navLink = document.querySelectorAll('.nav-link');

// Fade in Cotents
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeIn.length; i++) {
    const rect = fadeIn[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const height = window.innerHeight;

    if (scroll > offset - height + 150) {
      fadeIn[i].classList.add('scroll-in');
    }
  }
});

// toggle Menu
function toggleMenu() {
  if (
    navBgColor.classList.contains('active') ||
    toggleBtn.classList.contains('is-active')
  ) {
    navBgColor.classList.remove('active');
    toggleBtn.classList.remove('is-active');
    navBgColor.style.backgroundColor = 'rgba(2, 0, 36, 0.8)';
  } else {
    navBgColor.classList.add('active');
    toggleBtn.classList.add('is-active');
    navBgColor.style.backgroundColor = 'rgba(0, 212, 255, 0.9)';
    navBgColor.style.zIndex = 100;
  }
}

// add Event listener
for (const innerLink of innerLinks) {
  innerLink.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');

  document.querySelector(href).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

function switchByWidth() {
  if (window.matchMedia('(max-width: 1199px)').matches) {
    // SP works
    toggleBtn.addEventListener('click', toggleMenu);
    navLink.forEach(function (navLinks) {
      navLinks.addEventListener('click', toggleMenu);
    });
  } else if (window.matchMedia('(min-width: 1199px)').matches) {
    //PC works
  }
}

window.onload = switchByWidth;
window.onresize = switchByWidth;

// Toggle Button for projects
const moreBtn = document.getElementById('moreBtn');
const hiddenItems = document.querySelector('.hidden-items');
const classes = hiddenItems.classList;

moreBtn.addEventListener('click', () => {
  // moreBtn.innerText = hiddenItem ? 'Show Less' : 'Show More';
  if (classes.contains('show-more')) {
    moreBtn.textContent = 'Show Less';
    hiddenItems.style.display = '';
    hiddenItems.classList.remove('show-more');
  } else {
    moreBtn.textContent = 'Show More';
    hiddenItems.classList.add('show-more');
  }
});

// jQuery
$(document).ready(function () {
  $('.works-container').hide().fadeIn(5000);
});

console.log(window.innerWidth);
