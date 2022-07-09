document.getElementById("yearselector").addEventListener("change", function () {
  let newactive = document.querySelector("#" + this.value);

  removeClass();
  newactive.classList.add("showpeople");
});

function removeClass() {
  var allElements = document.querySelectorAll(".showpeople");
  for (i = 0; i < allElements.length; i++) {
    allElements[i].classList.remove("showpeople");
  }
}
