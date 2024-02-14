const imageFolder = "/assets/images/"; // Adjust the path if needed
const imageCount = 2; // Number of images to randomly choose

// Get all images in the folder
const images = [];
for (let i = 1; i <= imageCount; i++) {
    images.push(`${imageFolder}image${i}.jpg`); // Adjust if your file names differ
}

// Function to pick random images
function pickRandomImages(count) {
    const shuffledImages = [...images]; // Create a copy to shuffle
    for (let i = shuffledImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
    }
    return shuffledImages.slice(0, count);
}

// Set initial background
const firstImages = pickRandomImages(2);
document.getElementById("container").style.backgroundImage = `url(${firstImages[0]})`;

// Change background on open/close
window.addEventListener("load", () => {
    const newImages = pickRandomImages(2);
    document.getElementById("container").style.backgroundImage = `url(${newImages[0]})`;
});

window.addEventListener("beforeunload", () => {
    const newImages = pickRandomImages(2);
    document.getElementById("container").style.backgroundImage = `url(${newImages[0]})`;
});
