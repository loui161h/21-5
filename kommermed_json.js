document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 288;


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
    visDataKommerMed();
}

function visDataKommerMed() {
    /*    document.querySelector(".splash_img").src = alleTekster.billede1.guid;*/
    document.querySelector("#kommermed_overskrift1").textContent = alleTekster.title.rendered;
    document.querySelector("#kommermed_p1").innerHTML = alleTekster.content.rendered;

    document.querySelector("#kommermed_p2").textContent = alleTekster.tekst1;
    document.querySelector("#kommermed_p3").innerHTML = alleTekster.tekst2;


    document.querySelector("#kommermed_p4").innerHTML = alleTekster.tekst3;
    document.querySelector("#kommermed_overskrift2").textContent = alleTekster.overskrift3;
    document.querySelector("#kommermed_p5").innerHTML = alleTekster.tekst5;


}
