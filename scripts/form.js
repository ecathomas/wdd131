let year = new Date().getFullYear();
var lastModified = document.lastModified;
let footer = `&copy; ${year} Evelyn Abplanalp Thomas\n Last Modified: ${lastModified}`;
document.getElementsByTagName('p')[0].innerHTML = footer;

const products = [
    {
      id: fc-1888,
      name: "flux capacitor",
      avg-rating: 4.5
    },
    {
      id: fc-2050,
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: fs-1987,
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: ac-2000,
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: jj-1969,
      name: "warp equalizer",
      averagerating: 5.0
    }
];

function populateProductOptions() {
    var selectElement = document.getElementById("product-select");
};

selectElement.innerHTML = "";

