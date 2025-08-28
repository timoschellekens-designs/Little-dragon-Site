document.addEventListener("DOMContentLoaded", function () {
    // Initialize Glide.js
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 5,
        autoplay: 2000,
        animationDuration: 800
    });

    // Function to find the closest slide to the center
    function findClosestSlide() {
        const slides = document.querySelectorAll('.glide__slide');
        const glideTrack = document.querySelector('.glide__track');
        const trackRect = glideTrack.getBoundingClientRect();
        const centerX = trackRect.left + trackRect.width / 2;

        let closestSlide = null;
        let minDistance = Infinity;

        slides.forEach(slide => {
            const slideRect = slide.getBoundingClientRect();
            const slideCenterX = slideRect.left + slideRect.width / 2;
            const distance = Math.abs(centerX - slideCenterX);

            if (distance < minDistance) {
                minDistance = distance;
                closestSlide = slide;
            }
        });

        return closestSlide;
    }

    // Listen for Glide.js slide transition completion and update immediately
    glide.on('run.after', () => {
        const closestSlide = findClosestSlide();
        if (closestSlide) {
            const displayImage = document.getElementById("glide-popup");

            if (displayImage) {
                console.log("Updating Image:", closestSlide.src);
                displayImage.src = closestSlide.src;
            }
        }
    });

    // Mount Glide.js
    glide.mount();
});