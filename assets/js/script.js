document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Hero text animation
  const heroText = document.querySelector(".hero-text");
  heroText.style.opacity = 0;
  setTimeout(() => {
    heroText.style.transition = "opacity 2s ease-in";
    heroText.style.opacity = 1;
  }, 500);

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

  // Simple cart system
  const cart = [];
  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const product = btn.parentElement.querySelector("h3").textContent;
      cart.push(product);
      alert(`${product} added to cart!`);
    });
  });
});
const form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for contacting Bandar Ceramica!");
});
