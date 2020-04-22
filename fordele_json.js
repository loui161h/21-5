document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 275;


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
    visDataFordele();
}

function visDataFordele() {
    document.querySelector("#fordele_splash_img").src = alleTekster.billede1.guid;
    document.querySelector("#fordele_overskrift1").textContent = alleTekster.title.rendered;
    document.querySelector("#fordele_p1").innerHTML = alleTekster.content.rendered;

    document.querySelector("#fordele_overskrift2").textContent = alleTekster.overskrift1;
    document.querySelector("#fordele_p2").innerHTML = alleTekster.tekst1;

    document.querySelector("#fordele_overskrift3").textContent = alleTekster.overskrift2;
    document.querySelector("#fordele_p3").innerHTML = alleTekster.tekst3;

    document.querySelector("#fordele_overskrift4").textContent = alleTekster.overskrift3;
    document.querySelector("#fordele_p4").innerHTML = alleTekster.tekst5;

    document.querySelector("#fordele_overskrift5").textContent = alleTekster.overskrift4;
    document.querySelector("#fordele_p5").innerHTML = alleTekster.tekst7;


    document.querySelector("#fordele_overskrift6").textContent = alleTekster.overskrift5;
    document.querySelector("#fordele_p6").innerHTML = alleTekster.tekst10;

    document.querySelector("#fordele_overskrift7").textContent = alleTekster.overskrift6;
    document.querySelector("#fordele_p7").innerHTML = alleTekster.tekst11;

    document.querySelector("#fordele_overskrift8").textContent = alleTekster.overskrift7;
    document.querySelector("#fordele_p8").innerHTML = alleTekster.tekst12;

    document.querySelector("#fordele_overskrift9").textContent = alleTekster.overskrift8;
    document.querySelector("#fordele_p9").innerHTML = alleTekster.tekst13;

    document.querySelector("#fordele_overskrift10").textContent = alleTekster.overskrift9;
    document.querySelector("#fordele_p10").innerHTML = alleTekster.tekst14;

    document.querySelector("#fordele_overskrift11").textContent = alleTekster.overskrift10;
    document.querySelector("#fordele_p11").innerHTML = alleTekster.tekst15;

}
