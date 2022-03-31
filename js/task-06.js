const input = document.querySelector("#validation-input");
input.addEventListener("blur", inputBlur);
function inputBlur(event) {
  if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.add("invalid");
    this.classList.remove("valid");
  }
}
