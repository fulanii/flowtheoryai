const exploreBtn = document.querySelector(".explore-btn");

exploreBtn.addEventListener("click", (event) => {
  event.preventDefault();
  serviceSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
