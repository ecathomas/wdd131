let year = new Date().getFullYear();
let date = `&copy; ${year} Evelyn Abplanalp Thomas MO, USA`;
document.getElementsByTagName('p')[0].innerHTML = date;

var lastModified = document.lastModified;
let oLastModified = `Last Modified: ${lastModified} `;
document.getElementsByTagName('p2')[1].innerHTML = oLastModified;

