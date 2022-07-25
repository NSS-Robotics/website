document.getElementById("yearselector").addEventListener("change", function () {
  let newactive = document.querySelector("#" + this.value);
  oldactive = document.querySelector(".people");

  removeClass();
  newactive.classList.add("showpeople");

  oldactive.animate([{ opacity: "1" }, { opacity: ".5" }], {
    duration: 1200,
  });
  newactive.animate([{ opacity: ".2" }, { opacity: "1" }], {
    duration: 1200,
  });
});

function removeClass() {
  var allElements = document.querySelectorAll(".showpeople");
  for (i = 0; i < allElements.length; i++) {
    allElements[i].classList.remove("showpeople");
  }
}
