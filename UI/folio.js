const body = document.querySelector("body");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const travel = document.querySelector(".travel");
const wildlife = document.querySelector(".wildlife");
const nature = document.querySelector(".nature");
const about_close = document.querySelector("#about-section i");
const contact_close = document.querySelector("#contact-section i");
const travel_close = document.querySelector("#travel-section i");
const wildlife_close = document.querySelector("#wildlife-section i");
const nature_close = document.querySelector("#nature-section i");

about.addEventListener("click", () => {
  body.classList.add("about-on");
});

contact.addEventListener("click", () => {
  body.classList.add("contact-on");
});

travel.addEventListener("click", () => {
  body.classList.add("travel-on");
});

wildlife.addEventListener("click", () => {
  body.classList.add("wildlife-on");
});

nature.addEventListener("click", () => {
  body.classList.add("nature-on");
});

about_close.addEventListener("click", () => {
  body.classList.remove("about-on");
});

contact_close.addEventListener("click", () => {
  body.classList.remove("contact-on");
});

travel_close.addEventListener("click", () => {
  body.classList.remove("travel-on");
});

wildlife_close.addEventListener("click", () => {
  body.classList.remove("wildlife-on");
});

nature_close.addEventListener("click", () => {
  body.classList.remove("nature-on");
});
