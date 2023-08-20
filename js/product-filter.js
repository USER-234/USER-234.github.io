document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".card");
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  const rangeInput = document.querySelectorAll(".range-input input");
  const priceInput = document.querySelectorAll(".price-input input");
  const range = document.querySelector(".slider .progress");

  let priceGap = 1;

  function updateSliderPosition() {
    const minVal = parseInt(rangeInput[0].value);
    const maxVal = parseInt(rangeInput[1].value);

    priceInput[0].value = minVal;
    priceInput[1].value = maxVal;
    range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

    filterProductsAndPrice(minVal, maxVal);
  }

  function filterProductsAndPrice(minPrice, maxPrice) {
    const selectedCategories = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    productCards.forEach((card) => {
      const price = parseFloat(card.getAttribute("data-price"));
      const productCategories = card.classList;

      if ((selectedCategories.length === 0 || selectedCategories.some((category) => productCategories.contains(category))) && price >= minPrice && price <= maxPrice) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  checkboxes.forEach((checkbox) => checkbox.addEventListener("change", updateSliderPosition));

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value);
      let maxVal = parseInt(rangeInput[1].value);
      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      }
      updateSliderPosition();
    });
  });

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value);
      let maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
        } else {
          rangeInput[1].value = maxPrice;
        }
        updateSliderPosition();
      }
    });
  });

  const resetButton = document.querySelector(".reset-button"); // Added this line for the reset button

  resetButton.addEventListener("click", function () {
    checkboxes.forEach((checkbox) => (checkbox.checked = false)); // Clear checkboxes
    rangeInput[0].value = rangeInput[0].min; // Reset price input values
    rangeInput[1].value = rangeInput[1].max;
    updateSliderPosition(); // Update slider positions
    filterProductsAndPrice(rangeInput[0].min, rangeInput[1].max); // Apply default filtering
  });

  // Initialize the slider position on page load
  updateSliderPosition();

  filterToggle.addEventListener("click", () => {
    if (filter.style.display === "grid") {
      filter.style.display = "none";
      icon.style.animation = "rotateUp 0.5s forwards";
    } else {
      filter.style.display = "grid";
      icon.style.animation = "rotateDown 0.5s forwards";
    }
  });
  
/*   if (window.innerWidth > 1120) {
    filter.style.display = "grid";
    console.log("test");
  } */






});
const filterToggle = document.querySelector(".filter-toggle");
const filter = document.querySelector(".filter");
const icon = document.querySelector(".filter-toggle i");

// Function to handle the display based on window width
function handleDisplay() {
  
  if (window.innerWidth > 1120) {
    filter.style.display = "grid";
    console.log("test");
  }
  if (window.innerWidth <= 1120) {
    filter.style.display = "none";
    console.log("test2");
  }
}

// Initial run of the function on page load
handleDisplay();

// Listen for the window resize event
window.addEventListener("resize", handleDisplay);