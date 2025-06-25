const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

panel.addEventListener("click", (e) => {
  const rating = e.target.closest(".rating");
  if (rating) {
    removeActive();
    rating.classList.add("active");
    selectedRating = rating.querySelector("small").innerText;
  }
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
