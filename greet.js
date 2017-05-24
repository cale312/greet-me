'use strict';
var greets = 0;
document.getElementById('greets').innerHTML = greets;

var greet = document.querySelector('#click');
var namesGreeted = {};

for (let i = 0; i < namesGreeted.length; i++) {}

function clearGreeting() {
  var greeting;
  greeting = document.getElementById('demo').innerHTML;
  if (greeting.length > 0) {
    document.getElementById('demo').innerHTML = '____________';
  }
}

function resetFunction() {
  'use strict';
  var x = document.getElementById("greets");
  if (x >= 0) {
    document.getElementById("greets").innerHTML = greets = 0;
  }
  localStorage.clear();
}

// Checks which radio has been checked and returns the right greeting massage in that language that has been selected..
function greetMassage(lang){
  for (let i = 0; i < lang.length; i++){
    if(lang[i].checked && lang[i].value === 'english'){
      return 'Hello'
    } else if(lang[i].checked && lang[i].value === 'xhosa'){
      return 'Molo'
    } else if(lang[i].checked && lang[i].value === 'espanol'){
      return 'Hola'
    }
  }
}

// Takes in the name inputed...
function manageNames(name){
  if (name.value !== '' && namesGreeted[name] === !undefined){
    return name.value;
  } else if(name.value !== '' && namesGreeted[name] === undefined){
    
  } else{
    return 'Please enter a valid name';
  }
}

// Call the functions that return the name greeted and the massage
function manageGreeting(){
  var lang = document.querySelectorAll('.lang');
  var name = document.querySelector('#text');
  var result = greetMassage(lang);
  var greetName = manageNames(name);

  document.querySelector('#demo').innerHTML = result + ' ' + greetName;
}

greet.addEventListener('click', function(){
  manageGreeting();
});
