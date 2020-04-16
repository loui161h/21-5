const endpoint = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/info/114";




let orienteringsmode;



// venter på content er loaded og kalder funktionen start
document.addEventListener("DOMContentLoaded", start);

function start() {
    hentData();
}

//funktionen der henter json data ned og kalder en funktion som printer data ud i html

async function hentData() {
    const response = await fetch(endpoint);



    orienteringsmode = await response.json();




    visData();
}

function visData() {
    /*    ORIENTERINGSMØDE */
    document.querySelector(".overskrift1").textContent = orienteringsmode.title.rendered;
    document.querySelector(".tekst1").innerHTML = orienteringsmode.content.rendered;

    document.querySelector(".underoverskrift1").textContent = orienteringsmode.overskrift1;
    document.querySelector(".tekst2").innerHTML = orienteringsmode.tekst1;

    /*    KAFFEMØDE */


    /*    KONTAKT */


    /*    JOB I 21-5 */


    /*    OFTE STILLEDE SPØRGSMÅL */






}
