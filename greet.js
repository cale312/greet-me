var greets = Number(localStorage.getItem('currentGreets'));

document.getElementById('greets').innerHTML = greets;

var namesGreeted = {};

for (var i = 0; i < namesGreeted.length; i++) {
}

function myFunction() {
    'use strict';
    var x = document.getElementById("text").value;
    //if radio button is checked and the length of what is typed is greater than zero and it is not a space and if the name looped is undefined/not in the list -->
    if (document.getElementById("english").checked && x.length > 0 && x !== " " && namesGreeted[x] === undefined) {
        // >-- add it to the list and -->
        namesGreeted[x] = 1;
        // >-- display this greeting
        document.getElementById("demo").innerHTML = 'Hello ' + x;
        document.getElementById("greets").innerHTML = greets += 1;
        
    } else if (document.getElementById("espanol").checked && x.length > 0 && x !== " " && namesGreeted[x] === undefined) {
        namesGreeted[x] = 1;
        document.getElementById("demo").innerHTML = 'Hola ' + x;
        document.getElementById("greets").innerHTML = greets += 1;
        
    } else if (document.getElementById("xhosa").checked && x.length > 0 && x !== " " && namesGreeted[x] === undefined) {
        namesGreeted[x] = 1;
        document.getElementById("demo").innerHTML = 'Molo ' + x;
        document.getElementById("greets").innerHTML = greets += 1;
        
    } else if (document.getElementById("english").checked && x.length > 0  && x !== " " && x !== undefined) {
        document.getElementById("demo").innerHTML = 'Hello ' + x;
        document.getElementById("greets").innerHTML = greets;
        alert('Name already greeted in one of the languages, please type in a different name, but please find your greeting at the bottom.');
        
    } else if (document.getElementById("espanol").checked && x.length > 0  && x !== " " && x !== undefined) {
        document.getElementById("demo").innerHTML = 'Hola ' + x;
        document.getElementById("greets").innerHTML = greets;
        alert('Name already greeted in one of the languages, please type in a different name, but please find your greeting at the bottom.');
        
    } else if (document.getElementById("xhosa").checked && x.length > 0  && x !== " " && x !== undefined) {
        document.getElementById("demo").innerHTML = 'Molo ' + x;
        document.getElementById("greets").innerHTML = greets;
        alert('Name already greeted in one of the languages, please type in a different name, but please find your greeting at the bottom.');
    }
    document.getElementById("text").value = "";
    localStorage.setItem("currentGreets", Number(greets));
}

function resetFunction() {
    'use strict';
    var x = document.getElementById("greets");
    if (x >= 0) {
        document.getElementById("greets").innerHTML = greets = 0;
    }
    localStorage.clear();
}





