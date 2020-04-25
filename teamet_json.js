document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 322;


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
    visDataTeamet();
}

function visDataTeamet() {
    document.querySelector("#teamet_splash_img").src = alleTekster.billede4.guid;
    document.querySelector("#teamet_overskrift").textContent = alleTekster.title.rendered;
    document.querySelector("#teamet_p1").innerHTML = alleTekster.content.rendered;


    document.querySelector("#team1").src = alleTekster.billede1.guid;
    document.querySelector("#teamet_overskrift2").textContent = alleTekster.overskrift1;
    document.querySelector("#teamet_p2").innerHTML = alleTekster.tekst1;

    document.querySelector("#teamet_overskrift3").textContent = alleTekster.overskrift2;
    document.querySelector("#teamet_p3").innerHTML = alleTekster.tekst3;
    document.querySelector("#team2").src = alleTekster.billede2.guid;
    document.querySelector("#team3").src = alleTekster.billede3.guid;

    document.querySelector("#teamet_overskrift4").textContent = alleTekster.overskrift3;
    document.querySelector("#teamet_p4").innerHTML = alleTekster.tekst5;





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
