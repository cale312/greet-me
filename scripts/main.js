'use strict';
var greet = document.querySelector('.greet-btn');
var reset = document.querySelector('.rst-btn');
var newName = document.querySelector('.name');
var lang = document.querySelectorAll('.lang');
document.querySelector('.counter').innerHTML = counterInc(newName.value);

// compile the greeting sentence
function displayGreeting(){
    var greetName = getName(newName);
    var checkedBtn = getRadioButton(lang);
    var greetMassage = getMassage(checkedBtn);
    if (greetName !== undefined && greetMassage !== undefined){
        return greetMassage + ' ' + greetName.value;
    } else {
        return 'Please enter a valid name and choose a language you want to be greeted in';
    }
}

// send results to the DOM
greet.addEventListener('click', function(){
    document.querySelector('.display').innerHTML = displayGreeting();
    document.querySelector('.counter').innerHTML = counterInc(newName.value);
    newName.value = '';
});

reset.addEventListener('click', function(){
  document.querySelector('.counter').innerHTML = resetCounter(counter);
});
