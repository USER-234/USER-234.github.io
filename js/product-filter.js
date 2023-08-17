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

  // Initialize the slider position on page load
  updateSliderPosition();
});
/* 
old code

document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  const cards = document.querySelectorAll(".card");

  function filterProducts() {
    const selectedCategories = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    cards.forEach((product) => {
      const productCategories = product.classList;
      if (selectedCategories.length === 0 || selectedCategories.some((category) => productCategories.contains(category))) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  checkboxes.forEach((checkbox) => checkbox.addEventListener("change", filterProducts));

  // Check the state of checkboxes on page load and apply initial filtering
  filterProducts();

  // Add an event listener to window.onbeforeunload to clear checkbox states
  window.addEventListener("beforeunload", function () {
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
  });
});




const productCards = document.querySelectorAll(".card");
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1;

function updateSliderPosition() {
  const minVal = parseInt(rangeInput[0].value),
    maxVal = parseInt(rangeInput[1].value);

  priceInput[0].value = minVal;
  priceInput[1].value = maxVal;
  range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
  range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

  filterCardsByPrice(minVal, maxVal);
}

function filterCardsByPrice(minPrice, maxPrice) {
  productCards.forEach((card) => {
    const price = parseFloat(card.getAttribute("data-price"));
    if (price >= minPrice && price <= maxPrice) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
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
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

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

// Initialize the slider position on page load
updateSliderPosition();
*/
