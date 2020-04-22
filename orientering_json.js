document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 310;


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
    visOrienteringsMode();
}

function visOrienteringsMode() {
    document.querySelector("#orienteringsmode_splash_img").src = alleTekster.billede1.guid;
    document.querySelector("#orienteringsmode_overskrift1").textContent = alleTekster.title.rendered;
    document.querySelector("#orienteringsmode_p1").innerHTML = alleTekster.content.rendered;

    document.querySelector("#orientering_img").src = alleTekster.billede1.guid;
    document.querySelector("#orienteringsmode_overskrift2").textContent = alleTekster.overskrift1;
    document.querySelector("#orienteringsmode_overskrift3").textContent = alleTekster.overskrift2;

}
