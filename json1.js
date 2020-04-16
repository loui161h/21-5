const url1 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/proces/88";


let process;

// venter på content er loaded og kalder funktionen start
document.addEventListener("DOMContentLoaded", start);

function start() {
    hentData();
}

//funktionen der henter json data ned og kalder en funktion som printer data ud i html

async function hentData() {
    const svar1 = await fetch(url1);

    process = await svar1.json();


    visData();
}

function visData() {
    document.querySelector("#overskrift1").textContent = process.title.rendered;
    document.querySelector("#tekst1").innerHTML = process.content.rendered;

    document.querySelector("#underoverskrift").textContent = process.overskrift1;
    document.querySelector("#tekst2").innerHTML = process.tekst1;

    document.querySelector("#underoverskrift1").textContent = process.overskrift2;
    document.querySelector("#tekst3").innerHTML = process.tekst2;


}
