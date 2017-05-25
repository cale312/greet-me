'use strict';

// Call the functions that return the name greeted and the massage
function displayGreeting() {
  var greetedNames = [];
  var lang = document.getElementsByName('lang');
  var name = document.querySelector('#text');
  var greet = greetMassage(lang);
  var greetName = getName(name);
  // var counter = counter(greetedNames);

  if (greet === undefined) {
    return greetName;
  } else {
    return greet + ' ' + greetName;
  }
  name.value = '';
}
