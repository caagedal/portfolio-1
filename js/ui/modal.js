export async function showModal(imageSrc, altText) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
  
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close'); // Improves accessibility
  
    const modalImage = document.createElement('img');
    modalImage.src = imageSrc;
    modalImage.alt = altText;
    modalImage.style.width = '100%'; // Adjust as needed
  
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalImage);
    modal.appendChild(modalContent);
  
    document.body.appendChild(modal);
  
    modal.style.display = 'block';
  
    closeBtn.onclick = function() {
      modal.style.display = 'none';
      modal.remove();
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        modal.remove();
      }
    }
  }
  

  