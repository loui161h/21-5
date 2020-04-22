document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 296;


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
    document.querySelector("#toscana_splash_img").src = alleTekster.billede1.guid;
    document.querySelector("#toscana_overskrift1").textContent = alleTekster.title.rendered;
    document.querySelector("#toscana_p1").innerHTML = alleTekster.content.rendered;

    document.querySelector("#toscana_overskrift2").textContent = alleTekster.overskrift1;
    document.querySelector("#toscana_p2").innerHTML = alleTekster.tekst1;

    document.querySelector("#toscana_overskrift3").textContent = alleTekster.overskrift2;
    document.querySelector("#toscana_p3").innerHTML = alleTekster.tekst3;

}
