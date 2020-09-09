const showMenu = document.querySelector(".mobile-show");
const mobileMenu = document.querySelector(".desktop-nav");

showMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle("show");
});

window.addEventListener("scroll", () => {
    const navigation = document.querySelector(".nav-bar");
    const heading = document.querySelector(".welcome");
    if (heading.pageYOffset==0) {
        navigation.style.backgroundColor = "#000";
    } 
});
