const hamburger = document.querySelector(".icon_hamburger");
const navMenu = document.querySelector(".topnav_menu");
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("opacity");
})


