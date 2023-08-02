// Function to show the popup image
function showPopupImage(imageSrc) {
  const popupImageContainer = document.querySelector(".popup-image");
  popupImageContainer.style.display = "block";
  const popupImage = popupImageContainer.querySelector("img");
  popupImage.src = imageSrc;
}

// Close the popup image when clicking outside the image
document.querySelector(".popup-image").onclick = (event) => {
  if (event.target.classList.contains("popup-image")) {
    event.target.style.display = "none";
  }
};

// Attach the click event to each image in the gallery
document.querySelectorAll(".product-container img").forEach((image) => {
  image.onclick = () => {
    const imageSrc = image.getAttribute("src");
    showPopupImage(imageSrc);
  };
});

// Close the popup image when clicking on the "x" symbol
document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};
