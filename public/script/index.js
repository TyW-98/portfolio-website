const Typewriter = window.Typewriter;

const console = document.getElementsByClassName("console")[0];
const introHeading = document.getElementsByClassName("console-text")[0];
const newConsoleRow = document.getElementsByClassName("new-console-row")[0];
const footer = document.getElementById("footer");
const header = document.getElementsByClassName("navbar")[0];
const welMsg = document.getElementsByClassName("welcome-message")[0];

const typewriter = new Typewriter(introHeading, {
  autoStart: true,
});

// function consoleTyping() {
//   return new Promise((resolve, reject) => {
//     typewriter
//       .typeString(' explorer "https://www.google.com"')
//       .start()
//       .callFunction(() => {
//         resolve();
//       });
//   });
// }

// consoleTyping().then(() => {
//   const cursor = document.getElementsByClassName("Typewriter__cursor")[0];
//   cursor.innerHTML = "";
//   newConsoleRow.style.visibility = "visible";
//   setTimeout(() => {
//     console.classList.add("hide");
//     newConsoleRow.innerHTML = "";
//     footer.classList.add("show");
//     header.classList.add("show");
//     welMsg.classList.add("show");
//   }, 1500);
// });
