const input = document.querySelector("#validation-input");
console.log(input);
input.addEventListener("blur", inputBlur);
function inputBlur(event) {
  if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
    this.classList.add("valid");
  } else {
    this.classList.add("invalid");
  }
}
