const imageSequence = [
    {
        image: 'img/branch1.png',
        translation: 'We are the Nomai.',
        position: { left: '0%', top: '0%' }
    },
    {
        image: 'img/branch1_clicked.png',
        translation: 'Exploring the universe.',
        position: { left: '0%', top: '0%' }
    },
    {
        image: 'img/branch2_clicked.png',
        translation: 'Seeking knowledge.',
        position: { left: '0%', top: '0%' }
    },
    {
        image: 'img/branch4_clicked.png',
        translation: 'Building a new home.',
        position: { left: '0%', top: '0%' }
    },
    {
        image: 'img/branch5_clicked.png',
        translation: 'Creating advanced technology.',
        position: { left: '0%', top: '0%' }
    },
    {
        image: 'img/branch3_clicked.png',
        translation: 'Discovering the Eye of the Universe.',
        position: { left: '0%', top: '0%' }
    },
    {
        image: 'img/branch6_clicked.png',
        translation: 'Our journey ends here.',
        position: { left: '0%', top: '0%' }
    }
];

let currentIndex = 0;

function addImage() {
    if (currentIndex >= imageSequence.length) {
        // Remove click events from images
        const images = document.querySelectorAll('.nomai-image');
        images.forEach(img => img.removeEventListener('click', addImage));
        return;
    }

    const container = document.getElementById('nomai-container');
    const translationElement = document.getElementById('translation');
    const imageData = imageSequence[currentIndex];

    // Create new image element
    const imgElement = document.createElement('img');
    imgElement.src = imageData.image;
    imgElement.alt = 'Nomai Branch';
    imgElement.classList.add('nomai-image');
    imgElement.style.left = imageData.position.left;
    imgElement.style.top = imageData.position.top;
    imgElement.style.zIndex = currentIndex; // Ensure proper stacking

    // Add click event to the new image
    imgElement.addEventListener('click', addImage);

    // Add the image to the container
    container.appendChild(imgElement);

    // Update the translation
    translationElement.textContent = imageData.translation;

    // Increment index for next image
    currentIndex++;
}

// Initial content load
addImage();