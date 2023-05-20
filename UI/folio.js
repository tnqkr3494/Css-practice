const body = document.querySelector("body");
const about = document.querySelector(".about");
const close = document.querySelector("#about-section i");

about.addEventListener("click", () => {
  body.classList.add("about-on");
});

close.addEventListener("click", () => {
  body.classList.remove("about-on");
});
