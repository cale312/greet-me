'use strict';
var greetedNames = {};

// get the newName in the input box
function getName(newName){
    if (greetedNames[newName] === undefined && newName.value !==''){
        return newName;
        greetedNames[newName] = 1;
    } else if (greetedNames[newName] !== undefined && newName.value !== ''){
        return newName;
    }
}
