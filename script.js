let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let letterIndex = 0;
let startTime = Date.now(); //start time

//page elements
const lettersElement = document.getElementById("letters");
const messageElement = document.getElementById("message");
const inputBoxElement = document.getElementById("input-box");

//When start button is clicked:
document.getElementById("start").addEventListener("click", () => {
  inputBoxElement.disabled = false;
  inputBoxElement.className = "";
  letterIndex = 0;
  const spanLetters = letters.map(function (letter) {
    return `<span class="letter">${letter}</span>`;
  });
  lettersElement.innerHTML = spanLetters.join("");
  lettersElement.childNodes[0].classList.add("highlight");
  messageElement.innerText = "";
  inputBoxElement.value = "";
  inputBoxElement.focus();
  startTime = new Date().getTime();
});

//When a letter is typed:
inputBoxElement.addEventListener("input", () => {
  const currentLetter = letters[letterIndex];
  const typedValue = inputBoxElement.value;

  if (letterIndex === letters.length - 1) {
    //When you finish all the letters:
    const elapsedTime = new Date().getTime() - startTime;
    const finishMessage = `You finished in ${elapsedTime / 1000} seconds`;
    messageElement.innerText = finishMessage;
    inputBoxElement.disabled = true;
    inputBoxElement.className = "hidden";
  } else if (typedValue.trim().toUpperCase() === currentLetter) {
    //When you type in the correct value:
    inputBoxElement.value = "";
    letterIndex++;
    inputBoxElement.classList.remove("highlight");
    for (const letterElem of lettersElement.childNodes) {
      letterElem.classList.remove("highlight");
    }
    lettersElement.childNodes[letterIndex].classList.add("highlight");
  } else {
    //Wrong letter
    inputBoxElement.className = "error";
    inputBoxElement.Value = "";
  }
});
