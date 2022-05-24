var slideIndex = 1;
programmingshowDivs(slideIndex);

function programmingplusDivs(n) {
  programmingshowDivs((slideIndex += n));
}

function programmingshowDivs(n) {
  var i;
  var x = document.getElementsByClassName("programmingSlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
var autplay = setInterval(function () {
  programmingplusDivs(1);
}, 3000);
