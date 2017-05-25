'use strict';

// Checks which radio has been checked and returns the right greeting massage in that language that has been selected...
function greetMassage(lang) {
  for (let i = 0; i < lang.length; i++) {
    if (lang[i].checked && lang[i].value === 'english') {
      return 'Hello'
    } else if (lang[i].checked && lang[i].value === 'xhosa') {
      return 'Molo'
    } else if (lang[i].checked && lang[i].value === 'espanol') {
      return 'Hola'
    }
  }
}
