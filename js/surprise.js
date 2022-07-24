// get the element with the id surprise
let i = 0;
const surprise = document.getElementById("surprise");
// if the element is clicked 3 times then show confetti
surprise.addEventListener("click", () => {
  i++;
  if (i === 3) {
    i = 0;
    var end = Date.now() + 1.5 * 1000;

    // Confetti thanks to https://www.kirilv.com/canvas-confetti/

    var colors = ["#5ccbff", "#424241"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        zIndex: 200,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        zIndex: 200,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
});
