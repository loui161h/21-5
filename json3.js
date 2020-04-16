// 21-5 KONCEPTET ******************************** 21-5 KONCEPTET  ****************************** 21-5 KONCEPTET  ********************************* //

// Endpoint af vores json fil
const url1 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/83";


let koncept;
let hvad;
let hvor;
let hvorfor;



// venter på content er loaded og kalder funktionen start
document.addEventListener("DOMContentLoaded", start);


//funktionen start kalder funktionen som beder scriptet om at hende json data

function start() {
    hentData();
}


async function hentData() {
    const svar1 = await fetch(url1);
    const svar2 = await fetch(url1);
    const svar3 = await fetch(url1);
    const svar4 = await fetch(url1);








    koncept = await svar1.json();
    hvad = await svar2.json();
    hvor = await svar3.json();
    hvorfor = await svar4.json();




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


}




// 21-5 KONCEPTET SLUT *********************** 21-5  KONCEPTET SLUT ************************** 21-5 KONCEPTET SLUT ********************************* //
