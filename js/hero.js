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
journeyBtn.addEventListener("click", (event) => {
  event.preventDefault();
  contactSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});