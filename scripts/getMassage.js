'use strict';

// Get checked radio button language
function getMassage(checkedBtn) {
  if (checkedBtn === 'eng') {
    return 'Hello ';
  } else if (checkedBtn === 'xho') {
    return 'Molo ';
  } else if (checkedBtn === 'esp') {
    return 'Hola ';
  }
}
