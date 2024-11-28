const imageSequence = [
    {
        image: '../image/nomai/branch1.png',
        translation: 'Translation: ',
        position: { left: '0%', top: '0%' }
    },
    {
        image: '../image/nomai/branch1_clicked.png',
        translation: 'Greetings, traveler from the stars. ',
        position: { left: '0%', top: '0%' }
    },
    {
        image: '../image/nomai/branch2_clicked.png',
        translation: 'We, the Nomai, welcome you to the endless pursuit of knowledge. ',
        position: { left: '0%', top: '0%' }
    },
    {
        image: '../image/nomai/branch4_clicked.png',
        translation: 'As you walk among our buidings and read our words, ',
        position: { left: '0%', top: '0%' }
    },
    {
        image: '../image/nomai/branch5_clicked.png',
        translation: 'know that our curiosity mirrors your own. ',
        position: { left: '0%', top: '0%' }
    },
    {
        image: '../image/nomai/branch3_clicked.png',
        translation: 'May your journey through the cosmos ',
        position: { left: '0%', top: '0%' }
    },
    {
        image: '../image/nomai/branch6_clicked.png',
        translation: 'bring you wisdom, wonder, and connection to all that exists.',
        position: { left: '0%', top: '0%' }
    }
];

let currentIndex = 0;

function addImage() {
    if (currentIndex >= imageSequence.length) {
        const images = document.querySelectorAll('.nomai-image');
        images.forEach(img => img.removeEventListener('click', addImage));
        return;
    }

    const container = document.getElementById('nomai-container');
    const translationElement = document.getElementById('translation');
    const imageData = imageSequence[currentIndex];

    const imgElement = document.createElement('img');
    imgElement.src = imageData.image;
    imgElement.alt = 'Nomai Branch';
    imgElement.classList.add('nomai-image');
    imgElement.style.left = imageData.position.left;
    imgElement.style.top = imageData.position.top;
    imgElement.style.zIndex = currentIndex;

    imgElement.addEventListener('click', addImage);
    container.appendChild(imgElement);

    // // Update the translation
    // translationElement.textContent = imageData.translation;

    // Append to the existing translation
    translationElement.textContent += ' ' + imageData.translation;

    currentIndex++;
}

addImage();