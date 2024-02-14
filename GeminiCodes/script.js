// Replace these image URLs with your actual image URLs
const imageUrls = [
    "/assets/images/image.jpg",
    "/assets/images/image2.jpg",
    // Add more URLs as needed
];

// Function to pick a random image
function pickRandomImage() {
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
}

// Set initial background
const firstImage = pickRandomImage();
document.getElementById("container").style.backgroundImage = `url(${firstImage})`;

// Change background on reload
window.addEventListener("load", () => {
    const newImage = pickRandomImage();
    document.getElementById("container").style.backgroundImage = `url(${newImage})`;
});
