// Open overlay navigation menu
function openNav() {
    document.getElementById("overlayNav").style.height = "100%";
}

// Close overlay navigation menu
function closeNav() {
    document.getElementById("overlayNav").style.height = "0%";
}

// The length of the title message
var welcomeMsg = document.querySelector(".welcome-message")
var welcomeMsgLength = welcomeMsg.textContent.length

document.documentElement.style.setProperty('--steps',welcomeMsgLength)
