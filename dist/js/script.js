const menuBar = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    menuNav.classList.toggle("nav-scroll-active", window.scrollY > 0);
});



const hamburger = document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// menu close when click outside

document.addEventListener("click", function (e){
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)){
        navMenu.classList.remove("active");
    }
});