const imageSequence = [
    {
        image: 'img/branch1.png',
        translation: 'We are the Nomai.'
    },
    {
        image: 'img/branch1_clicked.png',
        translation: 'Exploring the universe.'
    },
    {
        image: 'img/branch2_clicked.png',
        translation: 'Seeking knowledge.'
    },
    // Continue adding images and translations as needed
    {
        image: 'img/branch3_clicked.png',
        translation: 'Discovering the unknown.'
    }
];

let currentIndex = 0;

function updateContent() {
    const imgElement = document.getElementById('nomai-image');
    const translationElement = document.getElementById('translation');

    // Update the image source
    imgElement.src = imageSequence[currentIndex].image;

    // Update the translation text
    translationElement.textContent = imageSequence[currentIndex].translation;
}

// Initial content load
updateContent();

// Add event listener for image clicks
document.getElementById('nomai-image').addEventListener('click', () => {
    if (currentIndex < imageSequence.length - 1) {
        currentIndex++;
        updateContent();
    } else {
        // Disable further clicks
        document.getElementById('nomai-image').style.pointerEvents = 'none';
        // Inform the user
        document.getElementById('translation').textContent += '\nEnd of sequence.';
    }
});

// Reset button functionality
document.getElementById('reset-button').addEventListener('click', () => {
    currentIndex = 0;
    updateContent();
    document.getElementById('nomai-image').style.pointerEvents = 'auto';
});
