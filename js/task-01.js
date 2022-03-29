const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
const categories = document.querySelector('[id="categories"]');
console.log(
  `Category: ${categories.firstChild.nextElementSibling.children[0].textContent}`
);
console.log(
  `Elements: ${categories.firstElementChild.childNodes[3].children.length}`
);
console.log(
  `Category: ${categories.childNodes[3].firstElementChild.textContent}`
);
console.log(
  `Elements: ${categories.childNodes[3].children[1].children.length}`
);
console.log(
  `Category: ${categories.childNodes[5].firstElementChild.textContent}`
);
console.log(
  `Elements: ${categories.childNodes[5].children[1].children.length}`
);
