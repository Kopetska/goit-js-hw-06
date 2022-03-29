function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonChangeColor = document.querySelector("button");
const backgroundColorText = document.querySelector(".color");
const body = document.querySelector("body");

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  backgroundColorText.innerHTML = getRandomHexColor();
}
buttonChangeColor.addEventListener("click", changeColor);
