const container = document.querySelector(".container");
const picsumURL = "https://picsum.photos/";
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  const size = getRandomSize();
  img.src = `${picsumURL}${size}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}${"/"}${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
