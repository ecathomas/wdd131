let year = new Date().getFullYear();
var lastModified = document.lastModified;
let footer = `&copy; ${year}  Evelyn Abplanalp Thomas  MO, USA \n 
Last Modified: ${lastModified}`;
document.getElementsByTagName('p')[0].innerHTML = footer;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Idaho Falls Idaho",
    location: "Idaho Falls, Idaho, United States",
    dedicated: "1945, September 15-20",
    area: 92177,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/1-Idaho-Falls-Temple-2097425.jpg"
  },
  {
    templeName: "Kansas City, Missouri",
    location: "Kansas City, Missouri, United States",
    dedicated: "2012, May 6",
    area: 32000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kansas-city-missouri/400x250/kansas-city-temple-lds-940258-wallpaper.jpg"
  },
  {
    templeName: "Tucson, Arizona",
    location: "Tucson, Arizona, United States",
    dedicated: "2017, August 13",
    area: 38216,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tucson-arizona/400x250/tucson-arizona-temple-exterior-1929407-wallpaper.jpg"
  }
]

createTempleCard(temples);

const home = document.querySelector("#home");
const oldTemp = document.querySelector("#old");
const newTemp = document.querySelector("#new");
const largeTemp = document.querySelector("#large");
const smallTemp = document.querySelector("#small");

function dedicatedYear(dateString) {
  const dateParts = dateString.split(", ");
  return parseInt(dateParts[0], 10);
}

home.addEventListener("click", () => {
    createTempleCard(temples);
})

oldTemp.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => dedicatedYear(temple.dedicated) < 1900);
  createTempleCard(filteredTemples);
})

newTemp.addEventListener("click", () => {
  const filteredTemples = temples.filter(temple => dedicatedYear(temple.dedicated) > 2000);
  createTempleCard(filteredTemples);
})

largeTemp.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
})

smallTemp.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 10000));
})

function createTempleCard(filteredTemples) {
  document.querySelector(".grid").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="lable">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="lable">Dedication:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="lable">Area:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".grid").appendChild(card);
});
}

