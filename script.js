const items = [
  {
    title: "Toy Ball",
    description: "Your Pet Will Love It!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Puzzle Toy",
    description: "Encourages Mental Stimulation!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Kitten Toy",
    description: "Keeps Your Pet Entertained!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Cat-Shaped Bowl",
    description: "Suitable for Dogs Too!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Pink Litter Tray",
    description: "Makes Litter Training Easier",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Dry Cat Food",
    description: "A Special Formula for Your Feline Friend!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Dry Dog Food",
    description: "Packed with Essential Vitamins",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Dog Toy",
    description: "Keeps Your Pet Away from Your Belongings",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Pet Bed",
    description: "The Perfect Place to Relax!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Portable Dog Water Bottle",
    description: "Perfect for Travel",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Pet Carrier",
    description: "Travel in Comfort!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Dog Leash",
    description: "For Wonderful Walks Together",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];

const template = document.querySelector("#item-template");
const catalog = document.querySelector("#shop-items");

function makeByTemplate(item) {
  const myTemplate = template.content.cloneNode(true);

  myTemplate.querySelector("img").src = item.img;
  myTemplate.querySelector("h1").textContent = item.title;
  myTemplate.querySelector("p").textContent = item.description;

  const tagsContainer = myTemplate.querySelector(".tags");

  item.tags.forEach((tag) => {
    const tagElement = document.createElement("div");

    tagElement.classList.add("tag");
    tagElement.textContent = tag;
    tagsContainer.append(tagElement);
  });

  myTemplate.querySelector(".price").textContent = item.price + "Р";

  catalog.append(myTemplate);
}

items.forEach((item) => {
  makeByTemplate(item);
});

const sendInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");
const noElemnt = document.querySelector("#nothing-found");

function searchRequest() {
  const searchElement = sendInput.value.trim().toLowerCase();

  let indicator = false;

  catalog.innerHTML = "";

  items.forEach((item) => {
    if (item.title.toLowerCase().includes(searchElement)) {
      makeByTemplate(item);
      noElemnt.textContent = "";
      sendInput.value = "";
      indicator = true;
    }
    if (!indicator) {
      noElemnt.textContent = "No Results Found";
    }
  });
}

searchButton.addEventListener("click", searchRequest);
