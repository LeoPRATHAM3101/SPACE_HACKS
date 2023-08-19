// Add interactive scroll behavior for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Add planet rotation animation
const planets = document.querySelectorAll('.planet');

planets.forEach(planet => {
    planet.addEventListener('mouseenter', () => {
        planet.classList.add('rotate');
    });

    planet.addEventListener('mouseleave', () => {
        planet.classList.remove('rotate');
    });
});
var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";
})