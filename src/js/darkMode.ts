const darkModeButton = document.getElementById("dark-mode-button");

// Listen for the dark mode toggle button click
darkModeButton?.addEventListener("click", toggleDarkMode);

// Check the current theme on page load
window.onload = checkDarkMode;

// Listen for the "astro:before-swap" event to make sure the incoming page has the correct theme
document.addEventListener("astro:before-swap", (event) => {
  if (localStorage.getItem("dark-mode") === "true") {
    event.newDocument.querySelector("body")?.classList.add("dark-mode");
  } else {
    event.newDocument.querySelector("body")?.classList.remove("dark-mode");
  }
});

// Check the current theme and set it on the body
function checkDarkMode() {
  if (localStorage.getItem("dark-mode") === "true") {
    document.querySelector("body")?.classList.add("dark-mode");
  } else {
    document.querySelector("body")?.classList.remove("dark-mode");
  }
}

// Toggle dark mode variable in local storage when button is clicked
function toggleDarkMode() {
  if (localStorage.getItem("dark-mode") === "true") {
    localStorage.setItem("dark-mode", "false");
    document.querySelector("body")?.classList.remove("dark-mode");
  } else {
    localStorage.setItem("dark-mode", "true");
    document.querySelector("body")?.classList.add("dark-mode");
  }
}
