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

// Call the functions that return the name greeted and the massage
function displayGreeting(){
  var lang = document.getElementsByName('lang');
  var name = document.querySelector('#text');
  var result = greetMassage(lang);
  var greetName = getName(name);

  document.querySelector('#demo').innerHTML = result + ' ' + greetName;
}

greet.addEventListener('click', function(){
  displayGreeting();
});
