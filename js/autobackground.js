function changeBG() {
  const header = document.querySelector(".header");
  const images = [
    "url(../imgs/headers/auto/1.webp",
    "url(../imgs/headers/auto/2.webp",
    "url(../imgs/headers/auto/3.webp",
    "url(../imgs/headers/auto/4.webp",
    "url(../imgs/headers/auto/5.webp",
    "url(../imgs/headers/auto/6.webp",
    "url(../imgs/headers/auto/7.webp",
    "url(../imgs/headers/auto/8.webp",
    "url(../imgs/headers/auto/9.webp",
    "url(../imgs/headers/auto/10.webp",
    "url(../imgs/headers/auto/11.webp",
  ];

  const bg = images[Math.floor(Math.random() * images.length)];

  header.style.backgroundImage = bg;
  header.style.transition = "2.3s";
}

setInterval(changeBG, 5000);

function initBg() {
  const header = document.querySelector(".header");
  header.style.backgroundImage = "url(../imgs/headers/auto/1.webp";
}

document.onload = initBg();

function initload() {
  const element = document.querySelector(".transition");
  const header = document.querySelector(".header");
  const images = [
    "url(../imgs/headers/auto/1.webp",
    "url(../imgs/headers/auto/2.webp",
    "url(../imgs/headers/auto/3.webp",
    "url(../imgs/headers/auto/4.webp",
    "url(../imgs/headers/auto/5.webp",
    "url(../imgs/headers/auto/6.webp",
    "url(../imgs/headers/auto/7.webp",
    "url(../imgs/headers/auto/8.webp",
    "url(../imgs/headers/auto/9.webp",
    "url(../imgs/headers/auto/10.webp",
    "url(../imgs/headers/auto/11.webp",
  ];

  //In the span of 10ms set the backgroud image of the header to every one of the images in the array
  for (let i = 0; i < images.length; i++) {
    setTimeout(() => {
      header.style.backgroundImage = images[i];
      console.log(images[i]);
    }, i * 10);
  }
  element.classList.remove("is-active");
}

window.onload = initload();
