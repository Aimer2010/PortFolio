/* toggle menu */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
}

/* active links on scroll */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));

      // ✅ Corrected selector with quotes + safety check
      let currentLink = document.querySelector('header nav a[href*="#' + id + '"]');
      if (currentLink) {
        currentLink.classList.add('active');
      }
    }
  });

  let header = document.querySelector('header');
  if (header) {
    header.classList.toggle('sticky', window.scrollY > 100);
  }

  if (menuIcon && navbar) {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
};

/* scroll reveal */
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal({ distance: '80px', duration: 2000, delay: 200 });
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}

/* typed js */
if (typeof Typed !== "undefined") {
  const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Java Developer', 'NLP Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
}
