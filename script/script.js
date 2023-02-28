// Open overlay navigation menu
function openNav() {
    // Get the overlay navigation element
    var overlayNav = document.getElementById("overlayNav");
  
    // Move the overlay navigation from the left to the center of the screen
    overlayNav.style.left = "0";

}

// Close overlay navigation menu
function closeNav() {
  // Get the overlay navigation element
  var overlayNav = document.getElementById("overlayNav");

  // Move the overlay navigation back to the left side of the screen
  overlayNav.style.left = "-1000%";
}

// The length of the title message
var welcomeMsg = document.querySelector(".welcome-message")
var welcomeMsgLength = welcomeMsg.textContent.length

document.documentElement.style.setProperty('--steps',welcomeMsgLength)
