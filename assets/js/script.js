// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Hero banner text animation
  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    heroText.style.opacity = 0;
    setTimeout(() => {
      heroText.style.transition = "opacity 2s ease-in";
      heroText.style.opacity = 1;
    }, 500);
  }

  // Lightbox for product images
  const productImages = document.querySelectorAll(".product-card img");
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  productImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      const bigImg = document.createElement("img");
      bigImg.src = img.src;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(bigImg);
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
});
