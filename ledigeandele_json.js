document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 308;


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
    visDataLedigeAndele();
}

function visDataLedigeAndele() {
    document.querySelector("#ledigeandele_splash_img").src = alleTekster.billede1.guid;
    document.querySelector("#ledigeandele_overskrift1").textContent = alleTekster.title.rendered;
    document.querySelector("#ledigeandele_p1").innerHTML = alleTekster.content.rendered;
    document.querySelector("#ledige_img1").src = alleTekster.billede4.guid;
    document.querySelector("#ledige_img2").src = alleTekster.billede2.guid;
    document.querySelector("#ledige_img3").src = alleTekster.billede3.guid;
    document.querySelector("#ledigeandele_overskrift2").textContent = alleTekster.overskrift1;
    document.querySelector("#ledigeandele_p2").textContent = alleTekster.tekst1;
    document.querySelector("#ledigeandele_p3").textContent = alleTekster.tekst2;
    document.querySelector("#ledigeandele_overskrift3").textContent = alleTekster.overskrift2;
    document.querySelector("#ledigeandele_p4").textContent = alleTekster.tekst3;
    document.querySelector("#ledigeandele_p5").textContent = alleTekster.tekst4;
    document.querySelector("#ledigeandele_overskrift4").textContent = alleTekster.overskrift3;




}
