'use strict';

var counter = 0;
var greetedNames = {};
for (let i = 0; i < greetedNames.length; i++) {}

// counter
function counterInc(newName) {
  if (greetedNames[newName] === undefined && newName.value !== '') {
    counter++;
    greetedNames[newName] = 1;
  } else if (greetedNames[newName] !== undefined && newName.value !== '') {
    counter = counter;
  }
  return counter;
}
