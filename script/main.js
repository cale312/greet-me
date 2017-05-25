'use strict';

var greet = document.querySelector('#click');

greet.addEventListener('click', function() {
  document.querySelector('#demo').innerHTML = displayGreeting();
});
