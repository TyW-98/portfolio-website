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

// The length of sub title 
var subTitle = document.querySelector(".sub-title");
var subTitleLength = subTitle.textContent.length;

document.documentElement.style.setProperty('--sub-steps',subTitleLength);

// The length of the title
var title = document.querySelector(".big-title");
var titleLength = title.textContent.length;

console.log(titleLength);

document.documentElement.style.setProperty('--title-steps',titleLength);




