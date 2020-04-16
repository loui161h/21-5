const url1 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/destination/162";
const url2 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/forening/30"

let destination;
let family;

// venter på content er loaded og kalder funktionen start
document.addEventListener("DOMContentLoaded", start);

function start() {
    hentData();
}

async function hentData() {
    const svar1 = await fetch(url1);
    const svar2 = await fetch(url2);

    destination = await svar1.json();
    family = await svar2.json();

    visData();
}

function visData() {
    /*    destinationer*/
    document.querySelector(".overskrift1").textContent = destination.title.rendered;
    document.querySelector(".tekst1").innerHTML = destination.content.rendered;

    /*    dk family 34*/
    document.querySelector(".overskrift1").textContent = family.title.rendered;
    document.querySelector(".tekst1").innerHTML = family.content.rendered;

    document.querySelector(".underoverskrift1").textContent = family.overskrift1;
    document.querySelector(".tekst2").innerHTML = family.tekst1;

    document.querySelector(".underoverskrift2").textContent = family.overskrift2;
    document.querySelector(".tekst3").innerHTML = family.tekst2;

    document.querySelector(".underoverskrift3").textContent = family.overskrift3;
    document.querySelector(".underoverskrift4").textContent = family.overskrift4;
    document.querySelector(".underoverskrift5").textContent = family.overskrift5;






}
