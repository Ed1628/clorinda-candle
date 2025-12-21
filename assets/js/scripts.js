// Select all images in the specified sections
const images = document.querySelectorAll('#forme img, #bicchieri img, #riciclo img');

// Create a modal element for the popup
const modal = document.createElement('div');
modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;
document.body.appendChild(modal);

// Create an image element inside the modal
const modalImg = document.createElement('img');
modalImg.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    cursor: pointer;
`;
modal.appendChild(modalImg);

// Add click event to each image
images.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.style.display = 'flex';
    });
});

// Close modal on click
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});