const toggleNavbar = document.getElementById("toggle-navbar");
const links = document.getElementById("links");
const navbarIcon = document.querySelector(".navbar-icon");
const mobileNavbar = document.querySelector(".mobile-navbar");

toggleNavbar.addEventListener("click", function () {
  links.classList.toggle("active");
  navbarIcon.classList.toggle("fa-times");
  navbarIcon.classList.toggle("fa-bars");
  mobileNavbar.classList.toggle("navbar-boxshadow");
});
