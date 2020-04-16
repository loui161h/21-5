Wordpress indhold til front end:

    Forside færdig, men mangler billeder
21 - 5 koncept - mangler billeder
Processen færdig, men mangler billeder
Destinationer indhold færdig, men mangler billeder og Single view til landene
Tilgængelige foreninger - mangler billeder

// 21-5 KONCEPTET ****************************** 21-5 KONCEPTET  **************************** 21-5 KONCEPTET  ******************************* //

// Endpoint af vores json fil
const endpoint6 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/83";
const endpoint7 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/83";
const endpoint8 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/83";
const endpoint9 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/83";
const endpoint10 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/83";
const endpoint11 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/83";
const endpoint12 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/83";
const endpoint13 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/83";

// definerer en variabel vi kalder alleTekster
let heading1;
let tekst1;
let overskrift;
let tekst;
let overskrift_2;
let tekst2;
let overskrift_3;
let tekst3;





// venter på content er loaded og kalder funktionen start
document.addEventListener("DOMContentLoaded", start);


//funktionen start kalder funktionen som beder scriptet om at hende json data

function start() {
    hentData();
}


async function hentData() {
    const response6 = await fetch(endpoint6);
    const response7 = await fetch(endpoint7);
    const response8 = await fetch(endpoint8);
    const response9 = await fetch(endpoint9);
    const response10 = await fetch(endpoint10);
    const response11 = await fetch(endpoint11);
    const response12 = await fetch(endpoint10);
    const response13 = await fetch(endpoint11);




    heading1 = await response6.json();
    tekst1 = await response7.json();
    overskrift = await response8.json();
    tekst = await response9.json();
    overskrift_2 = await response10.json();
    tekst2 = await response11.json();
    overskrift_3 = await response12.json();
    tekst3 = await response13.json()

    visData();
}


function visData() {
    //document.querySelector("#koncept_img").src = koncept.billede.guid;
    document.querySelector("#konceptet_heading1").textContent = heading1.title.rendered;
    document.querySelector("#konceptet_tekst1").innerHTML = tekst1.content.rendered;
    document.querySelector("#hvad_overskrift").textContent = overskrift.overskrift;
    document.querySelector("#hvad_tekst").innerHTML = tekst.tekst;
    document.querySelector("#hvor_overskrift_2").textContent = overskrift_2.overskrift_2;
    document.querySelector("#hvor_tekst2").innerHTML = tekst2.tekst2;
    document.querySelector("#hvorfor_overskrift_3").textContent = overskrift_3.overskrift_3;
    document.querySelector("#hvorfor_tekst3").innerHTML = tekst3.tekst3;

}

// 21-5 KONCEPTET SLUT ********************* 21-5  KONCEPTET SLUT ************************ 21-5 KONCEPTET SLUT ******************************* //
