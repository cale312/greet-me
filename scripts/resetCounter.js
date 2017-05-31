'use strict';

function resetCounter(counter){
  if (counter >= 0){
    counter = 0;
    localStorage.clear();
    return counter;
  }
}
