"use strict";

const quickBtn = document.querySelector(".quick-btn");
const qBookBtn = document.querySelector(".book-btn");

const infoFormDiv = document.querySelector("#info-form-div");
const bookDiv = document.querySelector("#book-div");

const form = document.querySelector("#contact-form");

qBookBtn.addEventListener("click", function () {
  quickBtn.classList.remove("btn-active");
  qBookBtn.classList.add("btn-active");

  infoFormDiv.style.display = "none";
  bookDiv.style.display = "flex";
  bookDiv.style.minWidth = "90vw";
  bookDiv.scrollIntoView({ behavior: "smooth", block: "center" });
});

quickBtn.addEventListener("click", function () {
  qBookBtn.classList.remove("btn-active");
  quickBtn.classList.add("btn-active");

  infoFormDiv.style.display = "flex";
  bookDiv.style.display = "none";
  infoFormDiv.scrollIntoView({ behavior: "smooth", block: "center" });
});

// form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  fetch("https://hook.us2.make.com/4q2jpc1iavy48s2vlj75dzepueajq7p3", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response)
    .then((data) => {

      if (data.status === 200 && data.ok === true) {
        alert("Form submitted successfully!");
        form.reset();
      }
      
    });
});
