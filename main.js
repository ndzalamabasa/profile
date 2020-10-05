const showMenu = document.querySelector(".mobile-show");
const mobileMenu = document.querySelector(".desktop-nav");
const menuItems = document.querySelectorAll(".mobile-hide");
const navigation = document.querySelector(".nav-bar");

showMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle("show");
    navigation.style.backgroundColor = "#000";
});

for (let item of menuItems) {
    item.addEventListener('click', function () {
        mobileMenu.classList.remove("show");
    });
}

// window.addEventListener("scroll", () => {
    
//     const heading = document.querySelector(".welcome");
//     if ((window.scrollY)/350) {
//         navigation.style.backgroundColor = "#000";
//     } 
// });
