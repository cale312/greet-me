var lang = document.querySelectorAll('.lang');

function manageGreting(lang){
  for (let i = 0; i < lang.length; i++){
    // alert(lang[i].value);
    if (lang[i].value === 'english'){
      return 'Hello';
    } else if (lang[i].value === 'espanol'){
      return 'Hola';
    } else {
      return 'Molo';
    }
  }
}
