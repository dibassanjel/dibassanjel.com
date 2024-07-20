function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.section').forEach(section => observer.observe(section));

new Typed('#element', {
    strings: ["Web Developer", "Programmer", "Designer"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});
