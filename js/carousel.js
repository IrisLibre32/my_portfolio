document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    const moveToNextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds
});
