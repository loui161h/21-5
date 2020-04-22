document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 311;


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
    visKaffeMode();
}

function visKaffeMode() {
    document.querySelector("#kaffemode_splash_img").src = alleTekster.billede1.guid;
    document.querySelector("#kaffemode_overskrift1").textContent = alleTekster.title.rendered;
    document.querySelector("#kaffemode_p1").innerHTML = alleTekster.content.rendered;
    document.querySelector("#kaffemode_img").src = alleTekster.billede2.guid;
    document.querySelector("#kaffemode_overskrift2").textContent = alleTekster.overskrift1;
    document.querySelector("#kaffemode_p2").textContent = alleTekster.tekst1;

}
