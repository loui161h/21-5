document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 322;


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
    visDataTeamet();
}

function visDataTeamet() {
    /*    document.querySelector(".splash_img").src = alleTekster.billede1.guid;*/
    document.querySelector("#teamet_overskrift").textContent = alleTekster.title.rendered;
    document.querySelector("#teamet_p1").innerHTML = alleTekster.content.rendered;

    document.querySelector("#teamet_overskrift2").textContent = alleTekster.overskrift1;
    document.querySelector("#teamet_p2").innerHTML = alleTekster.tekst1;

    document.querySelector("#teamet_overskrift3").textContent = alleTekster.overskrift2;
    document.querySelector("#teamet_p3").innerHTML = alleTekster.tekst2;

    document.querySelector("#teamet_overskrift4").textContent = alleTekster.overskrift3;
    document.querySelector("#teamet_p4").innerHTML = alleTekster.tekst3;

    document.querySelector("#teamet_overskrift5").textContent = alleTekster.overskrift4;
    document.querySelector("#teamet_p5").innerHTML = alleTekster.tekst4;




}
