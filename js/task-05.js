const textInput = document.querySelector("input");

const output = document.querySelector("span");

textInput.addEventListener("input", (event) => {
  if (textInput.value !== "") {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = "Anonymous";
  }
});
