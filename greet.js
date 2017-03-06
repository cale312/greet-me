/*declared a variable that will store the total number of greetings that have been stored to the local storage of the pc*/
var greets = Number(localStorage.getItem('currentGreets'));
/*displays the number of greetings on the screen*/
document.getElementById('greets').innerHTML = greets;
/*declared a variable with an empty array to store the nams that have been greeted*/
var namesGreeted = [];
/*when the greet me buton is clicked this function will execute*/
function myFunction() {
    'use strict';
    /*declared a variable named x to store the name typed in the text box*/
    var x = document.getElementById("text").value;
    /*conditional statement that checks if the English radio button has been checked and a name has been type in and that it is not a blank space*/
    if (document.getElementById("english").checked === true && x.length > 0 && x !== " ") {
        /*if all conditions are met, the screen will display 'Hello, #the_name_typed'*/
        document.getElementById("demo").innerHTML = 'Hello ' + x;
        /*after that it will incremate/add to the current number of greets in the greet counter by one*/
        document.getElementById("greets").innerHTML = greets += 1;
        /*pushing every name typed in the text box to the empty array*/
        namesGreeted.push(document.getElementById("text").value);
    /*same conditions as the english radio button but if the Espanol one is checked this time*/
    } else if (document.getElementById("espanol").checked === true && x.length > 0 && x !== " ") {
        /*displays this greeting*/
        document.getElementById("demo").innerHTML = 'Hola ' + x;
        /*also if all the conditions are met, it will incremate/add to the current number of greets in the greet counter by one*/
        document.getElementById("greets").innerHTML = greets += 1;
        /*pushing every name typed in the text box to the empty array*/
        namesGreeted.push(document.getElementById("text").value);
    /*same conditions as the english radio button but if the isiXhosa one is checked this time*/
    } else if (document.getElementById("xhosa").checked === true && x.length > 0 && x !== " ") {
        /*displays this greeting*/
        document.getElementById("demo").innerHTML = 'Molo ' + x;
        /*also if all the conditions are met, it will incremate/add to the current number of greets in the greet counter by one*/
        document.getElementById("greets").innerHTML = greets += 1;
        /*pushing every name typed in the text box to the empty array*/
        namesGreeted.push(document.getElementById("text").value);
    /*this conditional statement checks if none of the radio buttons are checked the greet counter should stay as it is and not incremate*/
    } else if (document.getElementById("english").checked === false || document.getElementById("xhosa").checked === false || document.getElementById("espanol").checked === false) {
        document.getElementById("greets").innerHTML = greets;
    }
    /*clears the text box after the greet me button has been clicked*/
    document.getElementById("text").value = "";
    /*saves the current number of greetings in the greet counter to the local storage of Greets*/
    localStorage.setItem("currentGreets", Number(greets));
    /*for loop that loops through the names stored in the namesGreeted array list*/
    for (var i = 0; i < namesGreeted.length; i++) {
        if (namesGreeted[i].value === document.getElementById("text").value) {
            document.getElementById("greets").innerHTML === greets;
        }
    }
}
/*when the reset button is clicked this function will execute*/
function resetFunction() {
    'use strict';
    /*stores the current number of greets in the greet counter*/
    var x = document.getElementById("greets");
    /*checks if the current number of greets is greater than zero*/
    if (x >= 0) {
        /*if conditions are met the greet counter will reset to zero*/
        document.getElementById("greets").innerHTML = greets = 0;
    }
    /*the total number of greetings that was sored in the local storage is deleted*/
    localStorage.clear();
}





