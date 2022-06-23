let btn = document.querySelector("goaway");
let moreblack = document.querySelector(".moreblack");
let infobox = document.querySelector(".infobox");

function goaway() {
  infobox.style.display = "none";
  moreblack.style.display = "none";
}

// when a user loads the page for the first time the infobox is displayed but every time after that it is hidden
if (localStorage.getItem("firsttime") === null) {
  infobox.style.display = "block";
  moreblack.style.display = "block";
  localStorage.setItem("firsttime", "true");
  console.log("first time");
} else {
  infobox.style.display = "none";
  moreblack.style.display = "none";
  console.log("not first time");
}
