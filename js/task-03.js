const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");
const arrayUrl = [];
const arrayAlt = [];
for (const image of images) {
  arrayUrl.push(image.url);
  arrayAlt.push(image.alt);
}

const markup = `<li><img src=${arrayUrl[0]} alt=${arrayAlt[0]} style="width: 300px"></li>
<li><img src=${arrayUrl[1]} alt=${arrayAlt[1]} style="width: 300px"></li>
<li><img src=${arrayUrl[2]} alt=${arrayAlt[2]} style="width: 300px"></li>`;
gallery.insertAdjacentHTML("afterbegin", markup);
