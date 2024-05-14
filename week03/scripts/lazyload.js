let year = new Date().getFullYear();
var lastModified = document.lastModified;
let footer = `&copy; ${year} Evelyn Abplanalp Thomas\n Last Modified: ${lastModified}`;
document.getElementsByTagName('p')[0].innerHTML = footer;
