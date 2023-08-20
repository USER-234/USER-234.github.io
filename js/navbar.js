const toggleNavbar = document.getElementById("toggle-navbar");
const links = document.getElementById("links");
const navbarIcon = document.querySelector(".navbar-icon");
const mobileNavbar = document.querySelector(".mobile-navbar");

// Function to close the navbar
function closeNavbar() {
  links.classList.remove("active");
  navbarIcon.classList.remove("fa-times");
  navbarIcon.classList.add("fa-bars");
}

toggleNavbar.addEventListener("click", function () {
  links.classList.toggle("active");
  navbarIcon.classList.toggle("fa-times");
  navbarIcon.classList.toggle("fa-bars");
});

// Get all links inside the navbar
const navbarLinks = links.getElementsByTagName("a");

// Add click event listener to each link to close the navbar
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", closeNavbar);
}

var lastScrollTop = 0;
const header = document.getElementsByTagName("header")[0]; // Assuming there's only one header element

window.addEventListener("scroll", () => {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && !links.classList.contains("active")) {
    // Check if the navbar is not in the "active" state before hiding it
    header.style.top = "-4rem";
  } else {
    header.style.top = "0rem";
  }
  lastScrollTop = scrollTop;
});

// Event listener to close the navbar if user clicks outside
window.addEventListener("click", function (event) {
  if (!mobileNavbar.contains(event.target)) {
    closeNavbar();
  }
});
