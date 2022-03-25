const categoryTotal = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryTotal.length}`);

const categoryTitle = document.querySelectorAll("h2");
console.log(`Category: ${categoryTitle[0].textContent}`);

const elementsFirst = document.querySelector("h2").nextElementSibling.children;
console.log(`Elements: ${elementsFirst.length}`);
console.log(`Category: ${categoryTitle[1].textContent}`);
console.log(`Elements: ${categoryTitle[1].nextElementSibling.children.length}`);
console.log(`Category: ${categoryTitle[2].textContent}`);
console.log(`Elements: ${categoryTitle[2].nextElementSibling.children.length}`);
