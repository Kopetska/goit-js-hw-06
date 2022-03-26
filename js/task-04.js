const buttonDecrement = document.querySelector('[data-action="decrement"]');

const buttonIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector("span");

let counterValue = 0;

buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  value.innerHTML = counterValue;
});

buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  value.innerHTML = counterValue;
});
