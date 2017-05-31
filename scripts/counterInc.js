var counter = 0;
var greetedNames = {};

// counter
function greetCounter(newName){
    if (greetedNames[newName] === undefined && newName.value !==''){
        counter =  counter += 1;
        greetedNames[newName] = 1;
    } else if(greetedNames[newName] === undefined && newName.value !=='') {
        counter = counter;;
    }
    return counter;
}
