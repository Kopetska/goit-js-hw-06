function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector('[id="boxes"]');
buttonCreate.addEventListener("click", () => {
  return createBoxes(input.value);
});
buttonDestroy.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  let string = "";
  for (let i = 0; i < amount; i += 1) {
    string += createBoxes(i);
  }
  return (boxes.innerHTML = string);
}
function createBoxes(ratio) {
  return `<div style="background-color: ${getRandomHexColor()}; height: ${
    30 + 10 * ratio
  }"px"></div>`;
}
function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}
