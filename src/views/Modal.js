export const Modal = ({ message }) => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const modalElement = document.createElement('div');
    modalElement.classList.add('modal');
    modalElement.innerHTML = `
      <div class="modal-content">
        <p>${message}</p>
        <button class="btn btn-secondary" id="closeModal">Close</button>
      </div>
    `;
  
    // Add the modal to the body
    document.body.appendChild(modalElement);
  
    // Handle modal closing
    const closeModalButton = document.getElementById('closeModal');
    closeModalButton.addEventListener('click', () => {
      modalElement.remove();
    });
  
    return Modal; // Return the modal element for potential further use
  };