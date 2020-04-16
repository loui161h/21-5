const url1 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/88";

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
    document.querySelector("#overskrift").textContent = process.title.rendered;
}
