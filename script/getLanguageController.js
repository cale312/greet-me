'use strict';

// Checks which radio button is checked an returns the right massage
function greetMassage(checkedBtn) {
  if (checkedBtn === 'english'){
    return 'Hello'
  } else if(checkedBtn === 'xhosa'){
    return 'Molo'
  } else if(checkedBtn === 'espanol'){
    return 'Hola'
  }
}
