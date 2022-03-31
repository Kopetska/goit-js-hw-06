function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.querySelector('[id="boxes"]');
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

const createBoxes = (amount) => {
  amount = input.value;
  const arr = [];
  arr.length = amount;
  arr.fill(amount).map((item, index) => {
    const baseSize = 30;
    const biggestSize = baseSize + index * 10;
    const box = document.createElement("div");
    box.setAttribute(
      `style`,
      `width:${biggestSize}px height:${biggestSize}px background-color:${getRandomHexColor()}`
    );
    boxes.append(box);
  });
};
const destroyBoxes = () => {
  input.value = "";
  boxes.innerHTML = "";
};
buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);
