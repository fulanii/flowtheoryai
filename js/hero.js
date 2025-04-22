const exploreBtn = document.querySelector(".explore-btn");
const journeyBtn = document.querySelector(".journey-btn"); 
const contactSection = document.querySelector("#contact-section");

exploreBtn.addEventListener("click", (event) => {
  event.preventDefault();
  serviceSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// start AI Journey btn clicked
journeyBtn.addEventListener("click", (event) => {
  event.preventDefault();

  bookDiv.scrollIntoView({ behavior: "smooth", block: "end" });

  quickBtn.classList.remove("btn-active");
  qBookBtn.classList.add("btn-active");

  infoFormDiv.style.display = "none";
  bookDiv.style.display = "flex";
  bookDiv.style.minWidth = "90vw";
});

