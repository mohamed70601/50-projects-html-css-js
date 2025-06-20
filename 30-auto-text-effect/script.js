const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming!";
let idx = 1;
let timer = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, timer);
}

speedEl.addEventListener("input", (e) => {
  timer = 300 / e.target.value;
});
