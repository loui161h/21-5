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








// 21-5 KONCEPTET ******************************** 21-5 KONCEPTET  ****************************** 21-5 KONCEPTET  ********************************* //
// 21-5 KONCEPTET ******************************** 21-5 KONCEPTET  ****************************** 21-5 KONCEPTET  ********************************* //

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

// 21-5 KONCEPTET SLUT *********************** 21-5  KONCEPTET SLUT ************************** 21-5 KONCEPTET SLUT ********************************* //
// 21-5 KONCEPTET SLUT *********************** 21-5  KONCEPTET SLUT ************************** 21-5 KONCEPTET SLUT ********************************* //







// GIVER MENING ***************************** GIVER MENING ********************************** GIVER MENING ***************************************** //

// Endpoint af vores json fil
const endpoint14 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/93";
const endpoint15 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/93";
const endpoint16 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/93";
const endpoint17 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/93";
const endpoint18 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/93";
const endpoint19 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/93";
const endpoint20 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/93";
const endpoint21 = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/koncept/93";



// definerer en variabel vi kalder alleTekster
let head;
let bread;
let head2;
let bread2;
let head3;
let bread3;
let head4;
let bread4;








// venter på content er loaded og kalder funktionen start
document.addEventListener("DOMContentLoaded", start);


//funktionen start kalder funktionen som beder scriptet om at hende json data

function start() {
    hentData();
}



async function hentData() {
    const response14 = await fetch(endpoint14);
    const response15 = await fetch(endpoint15);
    const response16 = await fetch(endpoint14);
    const response17 = await fetch(endpoint15);
    const response18 = await fetch(endpoint14);
    const response19 = await fetch(endpoint15);
    const response20 = await fetch(endpoint14);
    const response21 = await fetch(endpoint15);





    head = await response14.json();
    bread = await response15.json();
    head2 = await response16.json();
    bread2 = await response17.json();
    head3 = await response18.json();
    bread3 = await response19.json();
    head4 = await response20.json();
    bread4 = await response21.json();


    visData();
}


function visData() {
    //document.querySelector("#mening_img").src = mening.billede.guid;
    document.querySelector("#mening_head").textContent = head.title.rendered;
    document.querySelector("#mening_bread").innerHTML = bread.content.rendered;

    document.querySelector("#penge_head2").textContent = head2.overskrift_2;
    document.querySelector("#penge_bread2").innerHTML = bread2.tekst2;

    document.querySelector("#ejerskab_head3").textContent = head3.overskrift_3;
    document.querySelector("#ejerskab_bread3").innerHTML = bread3.tekst3;

    document.querySelector("#hvorfor_head4").textContent = head4.overskrift_4;
    document.querySelector("#hvorfor_bread4").innerHTML = bread4.tekst_4;



}
