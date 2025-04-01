// ========================= DOM Elements =========================
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const viewProjectsBtn = document.getElementById('viewProjectsBtn');
const downloadResumeBtn = document.getElementById('downloadResumeBtn');
const contactForm = document.getElementById('contact-form');

// ========================= Hamburger Menu Toggle =========================
hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Toggle 'active' class for animation
  hamburgerMenu.classList.toggle('active');
});

// Close the menu when a link is clicked (mobile)
navLinks.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav__link')) {
    navLinks.classList.remove('active');
    hamburgerMenu.classList.remove('active');
  }
});

// ========================= Smooth Scroll =========================
const smoothScroll = (target) => {
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
};

// Attach smooth scroll to navigation links
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href');
    smoothScroll(target);
  });
});

// ========================= View Projects Button =========================
viewProjectsBtn.addEventListener('click', () => {
  smoothScroll('#projects');
});

// ========================= Download Resume Button =========================
downloadResumeBtn.addEventListener('click', () => {
  const resumeUrl = 'your-resume-link.pdf'; // Add the actual link to your resume
  window.open(resumeUrl, '_blank');
});

// ========================= Form Validation =========================
const validateForm = () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return false;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  return true;
};

const validateEmail = (email) => {
  const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

// ========================= Handle Form Submission =========================
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateForm()) {
    alert('Message sent successfully!');

    // Reset form after submission
    contactForm.reset();
  }
});

// ========================= Scroll Animation on Reveal =========================
const revealElements = () => {
  const elements = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
};

// Trigger animation on scroll
window.addEventListener('scroll', revealElements);
revealElements(); // Trigger on load

// ========================= Console Logging for Debugging =========================
console.log('Portfolio script loaded successfully!');
