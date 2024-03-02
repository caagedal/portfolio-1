import { showModal } from "./ui/modal.js";


document.querySelectorAll(".media-box img").forEach(img => {
    img.addEventListener("click", function() {
      showModal(this.src, this.alt);
    });
  });