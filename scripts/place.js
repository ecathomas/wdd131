let year = new Date().getFullYear();
var lastModified = document.lastModified;
let footer = `&copy; ${year} 🌸 Evelyn Abplanalp Thomas 🌸 MO, USA \n Last Modified: ${lastModified}`;
document.getElementsByTagName('p')[0].innerHTML = footer;

var temp= 79;
var wSpeed= 7;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
var windChill= Math.round(windChill);
if (temp <= 50 && wSpeed>3) {
    document.getElementById("windChill").innerHTML= `${windChill}&deg;`
} else {
    document.getElementById("windChill").innerHTML= `N/A`
}
