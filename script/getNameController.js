// Takes in the name inputed...
function getName(name){
  if (name.value !== '' && namesGreeted[name] === !undefined){
    return name.value;
  } else if(name.value !== '' && namesGreeted[name] === undefined){
    return name.value;
  } else{
    return 'Please enter a valid name';
  }
}
