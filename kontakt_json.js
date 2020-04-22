document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 312;


let urlId;

if (tekstId) {
    urlId = tekstId;
} else {
    urlId = startId;
}

const url = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/tekst/" + urlId;


let alleTekster;



function start() {
    hentData();

}

async function hentData() {
    const response = await fetch(url);
    alleTekster = await response.json();


    /* ændre data navn til hver */
    visKontakt();
}

function visKontakt() {
    document.querySelector("#kontakt_splash_img").src = alleTekster.billede1.guid;
    document.querySelector("#kontakt_overskrift1").textContent = alleTekster.title.rendered;

    document.querySelector("#kontakt_p1").textContent = alleTekster.tekst1;
    document.querySelector("#kontakt_p2").textContent = alleTekster.tekst2;
    document.querySelector("#kontakt_p3").textContent = alleTekster.tekst3;
    document.querySelector("#kontakt_p4").textContent = alleTekster.tekst4;



}
