document.getElementById("yearselector").addEventListener("change", function () {
  let newactive = document.querySelector("#" + this.value);
  let oldactive = document.querySelector(".people");
  oldactive.style.display = "none";
  newactive.style.display = "flex";
  oldactive.animate([{ opacity: "1" }, { opacity: ".5" }], {
    duration: 1200,
  });
  newactive.animate([{ opacity: ".2" }, { opacity: "1" }], {
    duration: 1200,
  });
});
