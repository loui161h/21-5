document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 294;


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
    visDataDestinationer();
}

function visDataDestinationer() {
    document.querySelector("#destinationer_splash_img").src = alleTekster.billede1.guid;
    document.querySelector("#destinationer_overskrift").textContent = alleTekster.title.rendered;
    document.querySelector("#destinationer_p1").innerHTML = alleTekster.content.rendered;


    document.querySelector("#mallorca").textContent = alleTekster.overskrift1;
    document.querySelector("#mallorca_img").src = alleTekster.billede2.guid;

    document.querySelector("#toscana_img").src = alleTekster.billede3.guid;
    document.querySelector("#toscana").textContent = alleTekster.overskrift2;

    document.querySelector("#sydfrankrig").textContent = alleTekster.overskrift3;
    document.querySelector("#sydfrankrig_img").src = alleTekster.billede4.guid;

    document.querySelector("#chamonix").textContent = alleTekster.overskrift4;
    document.querySelector("#chamonix_img").src = alleTekster.billede5.guid;

    document.querySelector("#newyork").textContent = alleTekster.overskrift5;
    document.querySelector("#newyork_img").src = alleTekster.billede6.guid;

    document.querySelector("#barcelona").textContent = alleTekster.overskrift6;
    document.querySelector("#barcelona_img").src = alleTekster.billede7.guid;

    document.querySelector("#paris").textContent = alleTekster.overskrift7;
    document.querySelector("#paris_img").src = alleTekster.billede8.guid;

       document.querySelector("#rom").textContent = alleTekster.overskrift8;
    document.querySelector("#rom_img").src = alleTekster.billede9.guid;


}
