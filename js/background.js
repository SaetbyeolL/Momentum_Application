const images = [
    "autumn.jpeg", "beach.jpeg", "cloud.jpeg", "fireballoon.jpeg", "grassland.jpeg", "river.jpeg", "sanfrancisco.jpeg", "sunflower.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
//document.body.style.backgroundImage = `url(${[chosenImage]})`;














