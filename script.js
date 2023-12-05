let slideIndex = 0;
let slideshowInterval;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
}

function startSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideIndex = 0;
    }

    const slideshowContainer = document.getElementById("slideshow-container");
    const slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideshowInterval = setInterval(showSlides, 3000); // Schimbă imaginea la fiecare 3 secunde
    showSlides(); // Afișează prima imagine la începutul slideshow-ului
}

document.addEventListener("DOMContentLoaded", function () {
    const contentBox = document.querySelector(".content-box");
    contentBox.addEventListener("dblclick", function () {
        startSlideshow();
    });
});