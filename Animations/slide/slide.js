let images = [
  "https://images.unsplash.com/photo-1496440543089-3d0eb669f6f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=788&q=80",
  "https://images.unsplash.com/photo-1619961310056-1f5c8df685d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1503001831666-8f3cf3a24544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1526306063970-d5498ad00f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1552694477-2a18dd7d4de0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
];

const image = document.querySelector(".images img");
const thumbnails = document.querySelector(".thumbnails");

let cnt = 0;

function moreImg() {
  thumbnails.innerHTML = images
    .map((image) => {
      return `<image src="${image}"/>`;
    })
    .join("");

  const thumbnailImg = document.querySelectorAll(".thumbnails img");

  for (let i = 0; i < thumbnailImg.length; i++) {
    thumbnailImg[i].addEventListener("click", () => {
      cnt = i;
      image.src = images[cnt];
    });
  }
}

moreImg();

document.querySelector("#front-btn").addEventListener("click", () => {
  cnt = (cnt + 1) % images.length;
  image.src = images[cnt];
});

document.querySelector("#back-btn").addEventListener("click", () => {
  cnt--;
  if (cnt < 0) {
    cnt = images.length - 1;
  }
  image.src = images[cnt];
});
