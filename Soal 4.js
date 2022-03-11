function isValidpassword (validPass) {
    let valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
    let nocaps = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/g;
  
    if ( typeof(validPass) == 'undefined'){
      return 'Error: Enter your password';
    }
    if ( typeof(validPass) == 'number') {
      return `Error: ${validPass} hanya berisi angka`;
    }
    if ( validPass.length < 8 && typeof(validPass) == 'string'){
      return `False, karena ${validPass} hanya memiliki ${validPass.length} huruf`;
    }
    if ( validPass.match(valid) ){
      return 'True';
    }
    if ( validPass.match(nocaps)){
      return `False, karena ${validPass} tidak memiliki huruf besar`
    }
    
  
}

console.log(isValidpassword('Meong2021'))
console.log(isValidpassword('meong2021'))
console.log(isValidpassword('@eong'))
console.log(isValidpassword('Meong2'))
console.log(isValidpassword(0))
console.log(isValidpassword())
console.log();
