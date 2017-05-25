'use strict';

// Call the functions that return the name greeted and the massage
function displayGreeting() {
  var lang = document.getElementsByName('lang');
  var name = document.querySelector('#text');

  // Call the functions for running the greeting
  var checkedBtn = getRadioButton(lang);
  var greet = greetMassage(checkedBtn);
  var greetName = getName(name);
  var counter = counter(greetedNames);

  if (greet === undefined) {
    return greetName;
  } else {
    return greet + ' ' + greetName;
  }
  name.value = '';
}
