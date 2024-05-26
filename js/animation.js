document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight / 5 * 4; // Adjust this value for earlier/later triggering

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    // Run the checkVisibility function on scroll
    window.addEventListener('scroll', checkVisibility);

    // Run the checkVisibility function on load
    checkVisibility();
});
