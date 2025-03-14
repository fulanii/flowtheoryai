"use script";

const hambuger = document.querySelector(".bi-list");
const modal = document.querySelector(".modal");
const bookBtn = document.querySelectorAll(".nav-cta-btn");
// toggle modal on click
hambuger.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "flex";
});

// close modal on click
document.querySelectorAll('.modal-item a').forEach(link => {
  link.addEventListener('click', function () {
    modal.style.display = "none" // Hide modal
  });
});

// go to booking section
bookBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none" // Hide modal
    document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
  });
});