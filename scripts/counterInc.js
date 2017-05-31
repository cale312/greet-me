'use strict';

var counter = 0;
var greetedNames = {};

// counter
function counterInc(newName){
  if (greetedNames[newName] === undefined && newName !== '') {
    counter += 1;
    greetedNames[newName] = 1;
    localStorage.setItem('counter', counter);
  }
  return counter;
}
