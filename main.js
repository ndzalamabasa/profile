const showMenu = document.querySelector(".mobile-menu");
const mobileMenu = document.querySelector(".desktop-nav");

showMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle("show-menu");
});