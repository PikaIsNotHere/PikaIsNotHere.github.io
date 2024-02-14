const imageFolder = "/assets/images/"; // Adjust the path if needed

// Get all images in the folder
const images = [];
for (const image of document.querySelectorAll(`img[src^="${imageFolder}"]`)) {
    images.push(image.src);
}

// Function to pick a random image
function pickRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

// Set initial background
const firstImage = pickRandomImage();
document.getElementById("container").style.backgroundImage = `url(${firstImage})`;

// Change background on reload
window.addEventListener("load", () => {
    const newImage = pickRandomImage();
    document.getElementById("container").style.backgroundImage = `url(${newImage})`;
});
