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
