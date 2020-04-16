// 21-5 KONCEPTET ******************************** 21-5 KONCEPTET  ****************************** 21-5 KONCEPTET  ********************************* //

// Endpoint af vores json fil
const url1 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/83";
const url2 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/93";
const url3 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/94";


let koncept;
let giverMening;
let voresFamilier;



// venter på content er loaded og kalder funktionen start
document.addEventListener("DOMContentLoaded", start);


//funktionen start kalder funktionen som beder scriptet om at hende json data

function start() {
    hentData();
}


async function hentData() {
    const svar1 = await fetch(url1);
    const svar2 = await fetch(url2);
    const svar3 = await fetch(url3);




    koncept = await svar1.json();
    giverMening = await svar2.json();
    voresFamilier = await svar3.json();


    visData();
}


function visData() {
    //document.querySelector("#koncept_img").src = koncept.billede.guid;

    /*    21-5 konceptet*/
    document.querySelector(".overskrift").textContent = koncept.title.rendered;
    document.querySelector(".tekst").innerHTML = koncept.content.rendered;

    document.querySelector(".underoverskrift1").textContent = koncept.overskrift;
    document.querySelector(".tekst1").innerHTML = koncept.tekst;

    document.querySelector(".underoverskrift2").textContent = koncept.overskrift_2;
    document.querySelector(".tekst2").innerHTML = koncept.tekst2;

    document.querySelector(".underoverskrift3").textContent = koncept.overskrift_3;
    document.querySelector(".tekst3").innerHTML = koncept.tekst3;


    /*    Fordi det giver mening*/
    document.querySelector(".overskrift").textContent = giverMening.title.rendered;
    document.querySelector(".tekst").innerHTML = giverMening.content.rendered;

    document.querySelector(".underoverskrift1").textContent = giverMening.overskrift_2;
    document.querySelector(".tekst1").innerHTML = giverMening.tekst2;

    document.querySelector(".underoverskrift2").textContent = giverMening.overskrift_3;
    document.querySelector(".tekst2").innerHTML = giverMening.tekst3;

    document.querySelector(".underoverskrift3").textContent = giverMening.overskrift_4;
    document.querySelector(".tekst3").innerHTML = giverMening.tekst_4;


    /*    Det siger vores familier*/
    document.querySelector(".overskrift").textContent = voresFamilier.title.rendered;
    document.querySelector(".tekst").innerHTML = voresFamilier.content.rendered;




}




// 21-5 KONCEPTET SLUT *********************** 21-5  KONCEPTET SLUT ************************** 21-5 KONCEPTET SLUT ********************************* //
