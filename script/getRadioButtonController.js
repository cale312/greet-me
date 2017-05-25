'use strict';

// Checks which radio has been checked and returns the right greeting massage in that language that has been selected...
function getRadioButton(lang) {
  for (let i = 0; i < lang.length; i++) {
    if (lang[i].checked) {
      return lang[i].value;
    }
  }
}
