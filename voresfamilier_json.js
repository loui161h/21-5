document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 273;


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
    visDataVoresFamilier();
}

function visDataVoresFamilier() {
    document.querySelector("#voresfamilier_splash_img").src = alleTekster.billede1.guid;
    document.querySelector("#voresfamilier_overskrift1").textContent = alleTekster.title.rendered;
    document.querySelector("#voresfamilier_p1").innerHTML = alleTekster.content.rendered;


    document.querySelector("#familie1").src = alleTekster.billede2.guid;
    document.querySelector("#voresfamilier_p2").textContent = alleTekster.tekst1;
    document.querySelector("#voresfamilier_overskrift2").innerHTML = alleTekster.overskrift1;


    document.querySelector("#familie2").src = alleTekster.billede3.guid;
    document.querySelector("#voresfamilier_p3").innerHTML = alleTekster.tekst3;
    document.querySelector("#voresfamilier_overskrift3").textContent = alleTekster.overskrift2;

    document.querySelector("#familie3").src = alleTekster.billede4.guid;
    document.querySelector("#voresfamilier_p4").innerHTML = alleTekster.tekst5;
    document.querySelector("#voresfamilier_overskrift4").textContent = alleTekster.overskrift3;

    document.querySelector("#familie4").src = alleTekster.billede5.guid;
    document.querySelector("#voresfamilier_p5").innerHTML = alleTekster.tekst7;
    document.querySelector("#voresfamilier_overskrift5").textContent = alleTekster.overskrift4;

    document.querySelector("#familie5").src = alleTekster.billede6.guid;
    document.querySelector("#voresfamilier_p6").innerHTML = alleTekster.tekst10;
    document.querySelector("#voresfamilier_overskrift6").textContent = alleTekster.overskrift5;

    document.querySelector("#familie6").src = alleTekster.billede7.guid;
    document.querySelector("#voresfamilier_p7").innerHTML = alleTekster.tekst10;
    document.querySelector("#voresfamilier_overskrift7").textContent = alleTekster.overskrift5;


}
