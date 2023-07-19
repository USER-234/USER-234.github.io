const toggleNavbar = document.getElementById("toggle-navbar");
const links = document.getElementById("links");
const navbarIcon = document.querySelector(".navbar-icon");
const mobileNavbar = document.querySelector(".mobile-navbar");

toggleNavbar.addEventListener("click", function () {
  links.classList.toggle("active");
  navbarIcon.classList.toggle("fa-times");
  navbarIcon.classList.toggle("fa-bars");
});

var lastSchrollTop = 0;
header = document.getElementsByTagName("header");
window.addEventListener("scroll", () => {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastSchrollTop) {
    header.style.top = "-4rem";
  } else {
    header.style.top = "0rem";
  }
  lastSchrollTop = scrollTop;
});
