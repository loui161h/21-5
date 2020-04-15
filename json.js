// Endpoint af vores json fil
const endpoint1 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2";
const endpoint2 = ""

// definerer en variabel vi kalder alleTekster
let alleTekster;


// venter på content er loaded og kalder funktionen start
document.addEventListener("DOMContentLoaded", start);

//funktionen start kalder funktionen som beder scriptet om at hende json data

function start() {
    hentData();
}

//funktionen der henter json data ned og kalder en funktion som printer data ud i html

async function hentData() {
    const response = await fetch(endpoint1);
    const response = await fetch(endpoint2);
    alleTekster = await response.json();
    visData();
}

function visData() {
    document.querySelector("#").textContent = alleTekster.;
    document.querySelector("#").innerHTML = alleTekster.;
    document.querySelector("#").src = alleTekster.;
}
