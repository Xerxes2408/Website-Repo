// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded!');
    
    // Basic setup
    const body = document.body;
    const nav = document.querySelector('nav');
    const hero = document.querySelector('.hero');
    
    // Add any default event listeners or initializations here
    window.addEventListener('load', function() {
        console.log('Window loaded');
    });
});

// Add this JavaScript for hamburger menu functionality
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });

  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    
    function setActiveState() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollY > sectionTop - 50 && scrollY < sectionBottom) {
                const targetId = section.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('data-section') === targetId) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveState);
    setActiveState(); // Initial check
});

document.getElementById('viewProjectsBtn').addEventListener('click', function() {
    // Add smooth scroll to projects section
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    // Add your resume download logic here
    alert('Resume download feature clicked!');
});