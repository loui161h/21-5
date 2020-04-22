document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 295;


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
    visDataMallorca();
}

function visDataMallorca() {
    document.querySelector("#mallorca_splash_img").src = alleTekster.billede1.guid;
    document.querySelector("#mallorca_overskrift1").textContent = alleTekster.title.rendered;
    document.querySelector("#mallorca_p1").innerHTML = alleTekster.content.rendered;

    document.querySelector("#mallorca_overskrift2").textContent = alleTekster.overskrift1;
    document.querySelector("#mallorca_p2").innerHTML = alleTekster.tekst1;

    document.querySelector("#mallorca_overskrift3").textContent = alleTekster.overskrift2;
    document.querySelector("#mallorca_p3").innerHTML = alleTekster.tekst3;

}
