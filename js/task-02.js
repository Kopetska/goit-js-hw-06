const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector('[id="ingredients"]');
const fragment = document.createDocumentFragment();
ingredients.forEach(function (ingredient) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  fragment.appendChild(li);
});
ul.appendChild(fragment);
