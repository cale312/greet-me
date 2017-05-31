'use strict';

// returns the checked the radio buttons
function getRadioButton(lang) {
  for (let i = 0; i < lang.length; i++) {
    if (lang[i].checked) {
      return lang[i].value;
    }
  }
}
