const showMenu = document.querySelector(".mobile-show");
const mobileMenu = document.querySelector(".desktop-nav");

showMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle("show");
});