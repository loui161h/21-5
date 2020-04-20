document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 266;


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
    visLandingPage();
}

function visLandingPage() {
    /*    document.querySelector(".splash_img").src = alleTekster.billede1.guid;*/
    document.querySelector("#landing_overskrift1").textContent = alleTekster.title.rendered;
    document.querySelector("#landing_p1").innerHTML = alleTekster.content.rendered;

    document.querySelector("#landing_overskrift2").textContent = alleTekster.overskrift1;
    document.querySelector("#landing_underoverskrift1").textContent = alleTekster.overskrift2;
    document.querySelector("#landing_p2").textContent = alleTekster.tekst3;
    document.querySelector("#landing_underoverskrift2").textContent = alleTekster.overskrift3;
    document.querySelector("#landing_p3").textContent = alleTekster.tekst5;
    document.querySelector("#landing_underoverskrift3").textContent = alleTekster.overskrift4;
    document.querySelector("#landing_p4").textContent = alleTekster.tekst7;


    document.querySelector("#landing_overskrift3").textContent = alleTekster.overskrift5;
    document.querySelector("#landing_p5").textContent = alleTekster.tekst10;

    document.querySelector("#landing_overskrift4").textContent = alleTekster.overskrift6;
    document.querySelector("#landing_p6").textContent = alleTekster.tekst11;
    document.querySelector("#landing_p7").textContent = alleTekster.tekst12;
    document.querySelector("#landing_p8").textContent = alleTekster.tekst13;

    document.querySelector("#landing_overskrift5").textContent = alleTekster.overskrift9;
    document.querySelector("#landing_p9").textContent = alleTekster.tekst14;
}
