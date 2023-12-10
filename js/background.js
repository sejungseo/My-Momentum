const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg"
];

const chosenImg = images[Math.floor(Math.random() * images.length)];
const background = document.querySelector('#background')

background.style.backgroundImage = `url('img/${chosenImg}')`;