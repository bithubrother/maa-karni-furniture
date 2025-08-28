// ========================
// Footer Year Auto Update
// ========================
document.getElementById("year").textContent = new Date().getFullYear();

// ========================
// Smooth Scroll for nav links
// ========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ========================
// Lightbox for gallery images
// ========================
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    // Create overlay
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.inset = "0";
    lightbox.style.background = "rgba(0,0,0,0.9)";
    lightbox.style.display = "flex";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.zIndex = "1000";

    // Full image
    const fullImg = document.createElement("img");
    fullImg.src = img.src;
    fullImg.style.maxWidth = "90%";
    fullImg.style.maxHeight = "90%";
    fullImg.style.borderRadius = "12px";
    fullImg.style.boxShadow = "0 0 25px rgba(255,255,255,0.3)";

    // Append image
    lightbox.appendChild(fullImg);

    // Close on click
    lightbox.addEventListener("click", () => lightbox.remove());

    document.body.appendChild(lightbox);
  });
});
