let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  searchIcon.classList.remove("fa-times");
  searchForm.classList.remove("active");
});

let searchIcon = document.querySelector("#search-icon");
let searchForm = document.querySelector(".search-form");

searchIcon.addEventListener("click", () => {
  searchIcon.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  searchIcon.classList.remove("fa-times");
  searchForm.classList.remove("active");
};
