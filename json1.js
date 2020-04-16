const url1 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/proces/88";
const url2 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/proces/106";
const url3 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/proces/107";


let process;
let skaberHjem;
let stiftedeForeninger;

// venter på content er loaded og kalder funktionen start
document.addEventListener("DOMContentLoaded", start);

function start() {
    hentData();
}

//funktionen der henter json data ned og kalder en funktion som printer data ud i html

async function hentData() {
    const svar1 = await fetch(url1);
    const svar2 = await fetch(url2);
    const svar3 = await fetch(url3);

    process = await svar1.json();
    skaberHjem = await svar2.json();
    stiftedeForeninger = await svar3.json();


    visData();
}

function visData() {
    /*    processen*/
    document.querySelector(".overskrift1").textContent = process.title.rendered;
    document.querySelector(".tekst1").innerHTML = process.content.rendered;

    document.querySelector(".underoverskrift1").textContent = process.overskrift1;
    document.querySelector(".tekst2").innerHTML = process.tekst1;

    document.querySelector(".underoverskrift2").textContent = process.overskrift2;
    document.querySelector(".tekst3").innerHTML = process.tekst2;



    /*    vi skaber hjem*/
    document.querySelector(".overskrift1").textContent = skaberHjem.title.rendered;
    document.querySelector(".tekst1").innerHTML = skaberHjem.content.rendered;

    document.querySelector(".underoverskrift1").textContent = skaberHjem.overskrift1;
    document.querySelector(".tekst2").innerHTML = skaberHjem.tekst1;

    document.querySelector(".underoverskrift2").textContent = skaberHjem.overskrift2;
    document.querySelector(".tekst3").innerHTML = skaberHjem.tekst2;

    /*    stiftede foreninger*/
    document.querySelector(".overskrift1").textContent = stiftedeForeninger.title.rendered;
    document.querySelector(".tekst1").innerHTML = stiftedeForeninger.content.rendered;

    document.querySelector(".underoverskrift1").textContent = stiftedeForeninger.overskrift1;
    document.querySelector(".tekst2").innerHTML = stiftedeForeninger.tekst1;

    document.querySelector(".underoverskrift2").textContent = stiftedeForeninger.overskrift2;
    document.querySelector(".tekst3").innerHTML = stiftedeForeninger.tekst2;



}
