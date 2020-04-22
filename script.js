/************** BURGER MENU ***************/

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}




function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu2").classList.toggle("hidden");



    let erSkjult = document.querySelector("#menu2").classList.contains("hidden");



    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}

//document.querySelector("#koncept").addEventListener("click", visMenu);
//
//function visMenu() {
//    document.querySelector("#myDropdown").classList.add("hidden");
//}
