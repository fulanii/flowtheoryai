"use script";

const hambuger = document.querySelector(".bi-list");
const modal = document.querySelector(".modal");
const bookBtn = document.querySelectorAll(".nav-cta-btn");

const serviceA = document.querySelector(".services-a");
const aboutA = document.querySelector(".about-a");

const ModalSer = document.querySelector(".modalSer-a");
const ModalAbt = document.querySelector(".modalAbt-a");

const serviceSection = document.querySelector("#services-section");
const aboutSection = document.querySelector("#about-section");

// toggle modal on click
hambuger.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "flex";
});

// close modal on click
document.querySelectorAll(".modal-item a").forEach((link) => {
  link.addEventListener("click", function () {
    modal.style.display = "none"; // Hide modal
  });
});

// nav link scroll to section
serviceA.addEventListener("click", (event) => {
  event.preventDefault();
  serviceSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
aboutA.addEventListener("click", (event) => {
  event.preventDefault();
  aboutSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// modal scroll after close
ModalSer.addEventListener("click", (event) => {
  event.preventDefault();
  serviceSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
);
ModalAbt.addEventListener("click", (event) => {
  event.preventDefault();
  aboutSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
);
