// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Lightbox for gallery images
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    openLightbox(img.src, img.alt);
  });
});

function openLightbox(src, alt) {
  // Create overlay
  const overlay = document.createElement("div");
  overlay.classList.add("lightbox-overlay");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.9)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = 1000;

  // Image element
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.style.maxWidth = "90%";
  image.style.maxHeight = "80%";
  image.style.borderRadius = "10px";
  image.style.boxShadow = "0px 4px 15px rgba(255,255,255,0.3)";

  // Close button
  const closeBtn = document.createElement("span");
  closeBtn.innerHTML = "&times;";
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "20px";
  closeBtn.style.right = "30px";
  closeBtn.style.fontSize = "3rem";
  closeBtn.style.color = "#fff";
  closeBtn.style.cursor = "pointer";

  // Close event
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  overlay.appendChild(image);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);
}
