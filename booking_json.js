document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = ;


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
    visDataBooking();
}

function visDataBooking() {
    /*    document.querySelector(".splash_img").src = alleTekster.billede1.guid;*/
    document.querySelector("#").textContent = alleTekster.title.rendered;
    document.querySelector("#").innerHTML = alleTekster.content.rendered;

    document.querySelector("#").textContent = alleTekster.overskrift1;


    document.querySelector("#").textContent = alleTekster.overskrift2;
    document.querySelector("#").innerHTML = alleTekster.tekst1;

    document.querySelector("#").textContent = alleTekster.overskrift3;
    document.querySelector("#").innerHTML = alleTekster.tekst2;

    document.querySelector("#").textContent = alleTekster.overskrift4;
    document.querySelector("#").innerHTML = alleTekster.tekst3;
}
