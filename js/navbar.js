"use script";

const hambuger = document.querySelector(".bi-list");
const modal = document.querySelector(".modal");

// toggle modal on click
hambuger.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "flex";
});
