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
let head1;
let bread1;
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





    head1 = await response14.json();
    bread1 = await response15.json();
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
    document.querySelector("#mening_head1").textContent = head1.title.rendered;
    document.querySelector("#mening_bread1").innerHTML = bread1.content.rendered;

    document.querySelector("#penge_head2").textContent = head2.overskrift_2;
    document.querySelector("#penge_bread2").innerHTML = bread2.tekst2;

    document.querySelector("#ejerskab_head3").textContent = head3.overskrift_3;
    document.querySelector("#ejerskab_bread3").innerHTML = bread3.tekst3;

    document.querySelector("#hvorfor_head4").textContent = head4.overskrift_4;
    document.querySelector("#hvorfor_bread4").innerHTML = bread4.tekst_4;
}


// GIVER MENING SLUT ********************* GIVER MENING SLUT ********************************** GIVER MENING SLUT ********************************** //
