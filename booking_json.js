document.addEventListener("DOMContentLoaded", start);

let urlParameter = new URLSearchParams(window.location.search);

let tekstId = urlParameter.get("id");



/* ændre id'et til siden id */
const startId = 289;


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
    visDataBooking();
}

function visDataBooking() {
    document.querySelector("#bookingsystemet_splash_img").src = alleTekster.billede1.guid;

    document.querySelector("#bookingsystemet_overskrift1").textContent = alleTekster.title.rendered;
    document.querySelector("#bookingsystemet_p1").innerHTML = alleTekster.content.rendered;



    document.querySelector("#bookingsystemet_overskrift2").textContent = alleTekster.overskrift1;
    document.querySelector("#bookingsystemet_p2").textContent = alleTekster.tekst1;

    document.querySelector("#bookingsystemet_overskrift3").innerHTML = alleTekster.overskrift2;
    document.querySelector("#bookingsystemet_p3").innerHTML = alleTekster.tekst3;

    document.querySelector("#bookingsystemet_overskrift4").innerHTML = alleTekster.overskrift3;
    document.querySelector("#bookingsystemet_p4").innerHTML = alleTekster.tekst5;

    document.querySelector("#bookingsystemet_overskrift5").innerHTML = alleTekster.overskrift4;
    document.querySelector("#bookingsystemet_p5").innerHTML = alleTekster.tekst7;

    document.querySelector("#bookingsystemet_overskrift6").innerHTML = alleTekster.overskrift5;
    document.querySelector("#bookingsystemet_p6").innerHTML = alleTekster.tekst10;

    document.querySelector("#bookingsystemet_overskrift7").innerHTML = alleTekster.overskrift6;
    document.querySelector("#bookingsystemet_p7").innerHTML = alleTekster.tekst11;

    document.querySelector("#booking_img1").src = alleTekster.billede2.guid;

    document.querySelector("#bookingsystemet_overskrift8").innerHTML = alleTekster.overskrift7;
    document.querySelector("#bookingsystemet_p8").innerHTML = alleTekster.tekst12;

    document.querySelector("#booking_img2").src = alleTekster.billede3.guid;

    document.querySelector("#bookingsystemet_overskrift9").innerHTML = alleTekster.overskrift8;
    document.querySelector("#bookingsystemet_p9").innerHTML = alleTekster.tekst12;

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
