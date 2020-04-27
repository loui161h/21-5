document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 321;


let urlId;

if (tekstId) {
    urlId = tekstId;
} else {
    urlId = startId;
}

const url = "http://louisesettrup.dk/kea/09_cms/enogtyvefem_wp/wordpress/wp-json/wp/v2/tekst/" + urlId;


let alleTekster;



function start() {
    hentData();

}

async function hentData() {
    const response = await fetch(url);
    alleTekster = await response.json();


    /* ændre data navn til hver */
    visDataHistorien();
}

function visDataHistorien() {
    document.querySelector("#historien_splash_img").src = alleTekster.billede4.guid;
    document.querySelector("#historien_overskrift").textContent = alleTekster.title.rendered;


    document.querySelector("#historien_p2").innerHTML = alleTekster.tekst1;


    document.querySelector("#historien_p3").innerHTML = alleTekster.tekst2;

    document.querySelector("#historie_img1").src = alleTekster.billede1.guid;
    document.querySelector("#historie_img2").src = alleTekster.billede3.guid;
    /*    document.querySelector("#historie_img3").src = alleTekster.billede2.guid;*/



}

//TOP KNAP//

var mybutton = document.getElementById("myBtn");

// Når brugeren scroller 20 px ned fra toppen, vises knappen//
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Når man klikker på knappen, kommer man til toppen//
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
