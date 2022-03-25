const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const firstItem = document.createElement("li");
firstItem.classList.add("item");
firstItem.textContent = "Potatoes";

const secondItem = document.createElement("li");
secondItem.classList.add("item");
secondItem.textContent = "Mushrooms";

const thirdItem = document.createElement("li");
thirdItem.classList.add("item");
thirdItem.textContent = "Garlic";

const fifthItem = document.createElement("li");
fifthItem.classList.add("item");
fifthItem.textContent = "Tomatos";

const sixthItem = document.createElement("li");
sixthItem.classList.add("item");
sixthItem.textContent = "Herbs";

const seventhItem = document.createElement("li");
seventhItem.classList.add("item");
seventhItem.textContent = "Condiments";

const total = document.querySelector("ul");
total.append(
  fifthItem,
  secondItem,
  thirdItem,
  fifthItem,
  sixthItem,
  seventhItem
);
