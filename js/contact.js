"use strict";

const quickBtn = document.querySelector(".quick-btn");
const qBookBtn = document.querySelector(".book-btn");

const infoFormDiv = document.querySelector("#info-form-div");
const bookDiv = document.querySelector("#book-div");

qBookBtn.addEventListener("click", function () {
  quickBtn.classList.remove("btn-active");
  qBookBtn.classList.add("btn-active");

  infoFormDiv.style.display = "none";
  bookDiv.style.display = "flex";
  bookDiv.style.minWidth = "90vw";
  bookDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
;

});

quickBtn.addEventListener("click", function () {
  qBookBtn.classList.remove("btn-active");
  quickBtn.classList.add("btn-active");

  infoFormDiv.style.display = "flex";
  bookDiv.style.display = "none";
  infoFormDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
