var clicks = Number(localStorage.getItem('currentClicks'));

document.getElementById('clicks').innerHTML = clicks;

function myFunction() {
    'use strict';
    var x = document.getElementById("text").value;
    if (document.getElementById("one").checked === true && x.length > 0) {
        document.getElementById("demo").innerHTML = 'Hello ' + x;
        document.getElementById("clicks").innerHTML = clicks += 1;
    } else if (document.getElementById("two").checked === true && x.length > 0) {
        document.getElementById("demo").innerHTML = 'Hola ' + x;
        document.getElementById("clicks").innerHTML = clicks += 1;
    } else if (document.getElementById("three").checked === true && x.length > 0) {
        document.getElementById("demo").innerHTML = 'Molo ' + x;
        document.getElementById("clicks").innerHTML = clicks += 1;
    } else if (document.getElementById("one").checked === false) {
        document.getElementById("clicks").innerHTML = clicks;
    } else if (document.getElementById("two").checked === false) {
        document.getElementById("clicks").innerHTML = clicks;
    } else if (document.getElementById("three").checked === false) {
        document.getElementById("clicks").innerHTML = clicks;
    }
    document.getElementById("text").value = "";
    localStorage.setItem("currentClicks", Number(clicks));
}

function resetFunction() {
    'use strict';
    var x = document.getElementById("clicks");
    if (x >= 0) {
        document.getElementById("clicks").innerHTML = clicks = 0;
    }
}






