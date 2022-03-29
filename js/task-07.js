const input = document.querySelector('[id="font-size-control"]');
const text = document.querySelector('[id="text"]');
function changeFontSize() {
  text.style.fontSize = input.value + "px";
}
input.addEventListener("input", changeFontSize);
