const Typewriter = window.Typewriter;

const introHeading = document.getElementsByClassName("console-text")[0];
const newConsoleRow = document.getElementsByClassName("new-console-row")[0];

const typewriter = new Typewriter(introHeading, {
  autoStart: true,
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
});
