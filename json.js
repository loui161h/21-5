// FORSIDER ********************************** FORSIDER *********************************** FORSIDER *************************************** //
// FORSIDER ********************************** FORSIDER *********************************** FORSIDER *************************************** //


// Endpoint af vores json fil
const endpoint1 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/forside/70";
const endpoint2 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/forside/142";
const endpoint3 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/forside/144";
const endpoint4 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/forside/145";
const endpoint5 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/forside/147";


// definerer en variabel vi kalder alleTekster
let slide1;
let slide2;
let slide3;
let slide4;
let slide5;


// venter på content er loaded og kalder funktionen start
document.addEventListener("DOMContentLoaded", start);

//funktionen start kalder funktionen som beder scriptet om at hende json data

function start() {
    hentData();
}

//funktionen der henter json data ned og kalder en funktion som printer data ud i html

async function hentData() {
    const response1 = await fetch(endpoint1);
    const response2 = await fetch(endpoint2);
    const response3 = await fetch(endpoint3);
    const response4 = await fetch(endpoint4);
    const response5 = await fetch(endpoint5);


    slide1 = await response1.json();
    slide2 = await response2.json();
    slide3 = await response3.json();
    slide4 = await response4.json();
    slide5 = await response5.json();
    visData();
}

function visData() {
    document.querySelector("#slide_img").src = slide1.billede.guid;
    document.querySelector("#landingpage_slide1").textContent = slide1.title.rendered;
    document.querySelector("#landingpage_detkandu").innerHTML = slide1.content.rendered;



    document.querySelector("#slide_img2").src = slide2.billede.guid;
    document.querySelector("#landingpage_slide2").textContent = slide2.title.rendered;
    document.querySelector("#hvad").textContent = slide2.hvad;
    document.querySelector("#hvadtekst").innerHTML = slide2.tekst1;
    document.querySelector("#hvor").textContent = slide2.hvor;
    document.querySelector("#hvortekst").innerHTML = slide2.tekst2;
    document.querySelector("#hvorfor").textContent = slide2.hvorfor;
    document.querySelector("#hvorfortekst").innerHTML = slide2.tekst3;


    document.querySelector("#slide_img3").src = slide3.billede.guid;
    document.querySelector("#landingpage_slide3").textContent = slide3.title.rendered;
    document.querySelector("#landingpage_maalet").innerHTML = slide3.content.rendered;


    document.querySelector("#slide_img4").src = slide4.billede.guid;
    document.querySelector("#landingpage_slide4").textContent = slide4.title.rendered;


    document.querySelector("#slide_img5").src = slide5.billede.guid;
    document.querySelector("#landingpage_slide5").textContent = slide5.title.rendered;
    document.querySelector("#landingpage_skriv").innerHTML = slide5.content.rendered;



}

// FORSIDER SLUT ****************************** FORSIDER SLUT *********************************FORSIDER SLUT ********************************* //
// FORSIDER SLUT ****************************** FORSIDER SLUT *********************************FORSIDER SLUT ********************************* //
