document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 313;


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
    visJob();
}

function visJob() {
    document.querySelector("#job_splash_img").src = alleTekster.billede1.guid;
    document.querySelector("#job_overskrift1").textContent = alleTekster.title.rendered;

    document.querySelector("#job_p1").textContent = alleTekster.tekst1;
    document.querySelector("#job_p2").innerHTML = alleTekster.tekst2;


}
