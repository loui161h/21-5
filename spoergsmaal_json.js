document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 309;


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
    visDataSpoergsmaal();
}

function visDataSpoergsmaal() {
    document.querySelector("#spoergsmaal_splash_img").src = alleTekster.billede1.guid;
    document.querySelector("#spoergsmaal_overskrift").textContent = alleTekster.title.rendered;
    document.querySelector("#spoergsmaal_p1").innerHTML = alleTekster.content.rendered;

}
