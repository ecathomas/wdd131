let year = new Date().getFullYear();
var lastModified = document.lastModified;
let footer = `&copy; ${year} Evelyn Abplanalp Thomas\n Last Modified: ${lastModified}`;
document.querySelector('footer').innerHTML = footer;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    avgRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    avgRating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    avgRating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    avgRating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    avgRating: 5.0
  }
];

function populateProductOptions() {
  const selectElement = document.getElementById("product-select");
  
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  let reviewCount = localStorage.getItem('reviewCount') || 0;

  document.getElementById('reviewCount').textContent = reviewCount;

  localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);
});

document.addEventListener("DOMContentLoaded", function() {
  populateProductOptions();
});

