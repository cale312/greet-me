'use strict';
var greet = document.querySelector('.greet-btn');
var newName = document.querySelector('.name').value;
var lang = document.querySelectorAll('.lang');

// compile the greeting sentence
function displayGreeting(){
    var greetName = getName(newName);
    var checkedBtn = getRadioButton(lang);
    var greetMassage = getMassage(checkedBtn);
    if (greetName !== undefined && greetMassage !== undefined){
        return greetMassage + ' ' + greetName;
    } else {
        return 'Please enter a valid name and choose a language you want to be greeted in';
    }
}

// send results to the DOM
greet.addEventListener('click', function(){
    document.querySelector('.display').innerHTML = displayGreeting();
    document.querySelector('.counter').innerHTML = greetCounter(name);
    newName.value = '';
});
