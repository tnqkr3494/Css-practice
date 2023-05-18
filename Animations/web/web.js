document.addEventListener("DOMContentLoaded", function () {
  const slideImg = document.getElementById("slideImg");
  const images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];
  let i = 0;

  function slider() {
    slideImg.src = images[i];
    i = (i + 1) % images.length;
    setTimeout(slider, 3000);
  }

  slider(); // 슬라이더 시작
});
