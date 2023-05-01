const Typewriter = window.Typewriter;

const console = document.getElementsByClassName("console")[0];
const introHeading = document.getElementsByClassName("console-text")[0];
const newConsoleRow = document.getElementsByClassName("new-console-row")[0];
const landingPage = document.getElementsByClassName("landing-page")[0];
const navbar = document.getElementsByClassName("navbar-column")[0];
const mainContent = document.getElementById("content");


const typewriter = new Typewriter(introHeading, {
  autoStart: true,
});

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

function consoleTyping() {
  return new Promise((resolve, reject) => {
    typewriter
      .typeString(' explorer "https://www.google.com"')
      .start()
      .callFunction(() => {
        resolve();
      });
  });
}

consoleTyping().then(() => {
  const cursor = document.getElementsByClassName("Typewriter__cursor")[0];
  cursor.innerHTML = "";
  newConsoleRow.style.visibility = "visible";
  setTimeout(() => {
    console.classList.add("hide");
    newConsoleRow.innerHTML = "";
    landingPage.classList.add("show");
    navbar.classList.add("show");
    content.classList.add("show");
  }, 1500);
});
