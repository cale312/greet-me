'use strict';

// Get checked radio button language
function getMassage(checkedBtn){
    for (let i = 0; i < checkedBtn.length; i++){
        if (checkedBtn === 'eng'){
            return 'Hello ';
        } else if (checkedBtn === 'xho'){
            return 'Molo ';
        } else if (checkedBtn === 'esp'){
            return 'Hola ';
        }
    }
}
