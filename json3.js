const slutpunkt3 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/info/116";
const slutpunkt4 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/info/117";


let kontakt;
let job;


// venter på content er loaded og kalder funktionen start
document.addEventListener("DOMContentLoaded", start);

function start() {
    hentData();
}

//funktionen der henter json data ned og kalder en funktion som printer data ud i html

async function hentData() {
    const respns3 = await fetch(slutpunkt3);
    const respns4 = await fetch(slutpunkt4);


    kontakt = await respns3.json();
    job = await respns4.json();



    visData();
}

function visData() {
    /*    ORIENTERINGSMØDE */


    /*    KAFFEMØDE */



    /*    KONTAKT */

    document.querySelector(".overskrift1").textContent = kontakt.title.rendered;
    document.querySelector(".tekst1").innerHTML = kontakt.content.rendered;

    /*    JOB I 21-5 */

    document.querySelector(".overskrift1").textContent = job.title.rendered;
    document.querySelector(".tekst1").innerHTML = job.content.rendered;


    /*    OFTE STILLEDE SPØRGSMÅL */


}
