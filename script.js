let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Cloner le premier et le dernier slide pour créer un effet de boucle
const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[slides.length - 1].cloneNode(true);

const slidesContainer = document.querySelector('.slides');
slidesContainer.appendChild(firstSlide);
slidesContainer.insertBefore(lastSlide, slides[0]);

const totalSlidesWithClones = slides.length + 2; // Inclut les clones
const slideWidth = 100; // En pourcentage

function showNextSlide() {
    currentIndex++;
    
    if (currentIndex >= totalSlidesWithClones) {
        slidesContainer.style.transition = 'none'; // Désactiver la transition
        slidesContainer.style.transform = `translateX(-${slideWidth}%)`;
        currentIndex = 1; // Revenir à la première vraie diapositive
        setTimeout(() => {
            slidesContainer.style.transition = 'transform 1s ease-in-out'; // Réactiver la transition
            slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        }, 20); // Petit délai pour que le navigateur applique les styles
    } else {
        slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }
}

// Change slide every 5 seconds
setInterval(showNextSlide, 3000);
