// TYPING EFFECT

var typed = new Typed('#element', {
    strings: [
        'Web Developer',
        'App Developer',
        'IT Specialist'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});


// SKILLS ANIMATION

document.addEventListener('DOMContentLoaded', () => {

    const skillBars = document.querySelectorAll('.progress-fill');

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar = entry.target;
                const width = bar.getAttribute('data-width');

                bar.style.width = width;

            }

        });

    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });

});


// MOBILE MENU WITH ANIMATION

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {

    navLinks.classList.toggle('show');

    // hamburger animation
    menuIcon.classList.toggle('active');

});


// CLOSE MENU WHEN CLICK LINK

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('show');
        menuIcon.classList.remove('active');

    });

});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    '.hero-left, .hero-right, .about, .skills, .education, .resume, .contact'
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";

        }

    });

}, { threshold: 0.2 });

revealElements.forEach(el => {

    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 1s ease";

    revealObserver.observe(el);

});


// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        navbar.style.boxShadow = "none";

    }


});

