var typed = new Typed('#element', {
    strings: ['Web Developer.'],
    typeSpeed: 53,
});

// progress bar

document.addEventListener('DOMContentLoaded', () => {

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            const fill = bar.querySelector('.fill');
            if (isElementInViewport(bar)) {
                const targetWidth = fill.getAttribute('data-width');
                fill.style.width = targetWidth;
                bar.style.opacity = 1;
                bar.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', animateSkillBars);

    animateSkillBars();
});

// hamburger menu 

const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.right ul');
const links = document.querySelectorAll('.right ul li a');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

