'use strict';

var counter = Number(localStorage.getItem('counter'));
var greetedNames = {};

// counter
function counterInc(newName){
  if (greetedNames[newName] === undefined && newName !== '') {
    counter += 1;
    greetedNames[newName] = 1;
    localStorage.setItem('counter', counter);
  } else {
    counter = Number(localStorage.getItem('counter'));
  }
  return counter;
}
