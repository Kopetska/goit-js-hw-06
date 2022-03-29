const form = document.querySelector(".login-form");
function submit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Fill in all the fields");
    return;
  }
  const result = {};
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    result[name] = value;
  });
  console.log(result);
  form.reset();
}
form.addEventListener("submit", submit);
