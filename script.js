// Show year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth Scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Welcome Popup
const popup = document.getElementById("welcome-popup");
const closeBtn = document.getElementById("close-popup");
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
}

// Lightbox for gallery images
const galleryImages = document.querySelectorAll(".gallery-grid img");
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.inset = "0";
    lightbox.style.background = "rgba(0,0,0,0.9)";
    lightbox.style.display = "flex";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.zIndex = "1000";

    const fullImg = document.createElement("img");
    fullImg.src = img.src;
    fullImg.style.maxWidth = "90%";
    fullImg.style.maxHeight = "90%";
    fullImg.style.borderRadius = "12px";
    lightbox.appendChild(fullImg);

    lightbox.addEventListener("click", () => lightbox.remove());
    document.body.appendChild(lightbox);
  });
});
