const container = document.getElementById("container");
const colors = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#A66DD4",
  "#F38BA0",
  "#43E97B",
  "#38F9D7",
  "#FF9A8B",
  "#B983FF",
  "#FFAD69",
  "#00C9A7",
  "#FF7F50",
  "#87CEFA",
  "#D291BC",
  "#FFC75F",
  "#A1C298",
  "#F7B7A3",
  "#9ADCFF",
  "#C084FC",
];
const SQUARES = 700;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseout", () => {
    removeColor(square);
  });

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
