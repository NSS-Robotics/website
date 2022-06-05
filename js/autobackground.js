const images = [
  "../imgs/headers/auto/1.webp",
  "../imgs/headers/auto/2.webp",
  "../imgs/headers/auto/3.webp",
  "../imgs/headers/auto/4.webp",
  "../imgs/headers/auto/5.webp",
  "../imgs/headers/auto/6.webp",
  "../imgs/headers/auto/7.webp",
  "../imgs/headers/auto/8.webp",
  "../imgs/headers/auto/9.webp",
  "../imgs/headers/auto/10.webp",
  "../imgs/headers/auto/11.webp",
];

const firefox =
  navigator.userAgent.toString().toLowerCase().indexOf("firefox") != -1;

if (!firefox) {
  initBg();
  setInterval(changeBG, 5000);
} else {
  initBg();
}

function changeBG() {
  const header = document.querySelector(".header");
  const bg = images[Math.floor(Math.random() * images.length)];

  header.style.backgroundImage = "url(" + bg + ")";
  header.style.transition = "2.3s";
}

function initBg() {
  const bg = images[Math.floor(Math.random() * images.length)];
  const header = document.querySelector(".header");
  header.style.backgroundImage = "url(" + bg + ")";
}
