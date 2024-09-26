// Select all event cards and gallery overlays
const eventCards = document.querySelectorAll('.event-card');
const galleries = document.querySelectorAll('.gallery-overlay');

// Function to open the gallery when an event card is clicked
eventCards.forEach(card => {
    card.addEventListener('click', () => {
        const galleryId = card.getAttribute('data-gallery');
        const gallery = document.getElementById(galleryId);
        gallery.style.display = 'flex'; // Display the gallery overlay
    });
});

// Function to close the gallery when the close button or outside content is clicked
galleries.forEach(gallery => {
    // Close when clicking the close button
    gallery.querySelector('.close-btn').addEventListener('click', () => {
        gallery.style.display = 'none';
    });

    // Close when clicking outside the gallery content
    gallery.addEventListener('click', (event) => {
        // Check if the click was outside the gallery-content
        if (event.target === gallery) {
            gallery.style.display = 'none';
        }
    });
});

// Full-screen image view
const fullscreenOverlay = document.createElement('div');
fullscreenOverlay.classList.add('fullscreen-overlay');
fullscreenOverlay.innerHTML = `
    <span class="close-fullscreen">&times;</span>
    <img src="" alt="Full Screen Image">
`;
document.body.appendChild(fullscreenOverlay);

// Function to display image in full screen when clicked
const images = document.querySelectorAll('.scrollable-gallery img');
images.forEach(image => {
    image.addEventListener('click', (e) => {
        fullscreenOverlay.style.display = 'flex';
        fullscreenOverlay.querySelector('img').src = e.target.src;
    });
});

// Close full-screen view when clicking the close button
fullscreenOverlay.querySelector('.close-fullscreen').addEventListener('click', () => {
    fullscreenOverlay.style.display = 'none';
});

// Close full-screen view when clicking outside the image
fullscreenOverlay.addEventListener('click', (event) => {
    if (event.target === fullscreenOverlay) {
        fullscreenOverlay.style.display = 'none';
    }
});
