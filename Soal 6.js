function getAngkaTerbesarKedua(angka){
    var data = []
    
    if(typeof(angka) == 'undefined')
        {return "ERROR: Data cannot be empty"}
    if(typeof(angka) !== 'object')
        {return "ERROR: Your input is not array"}
    
    new Set(angka).forEach((item) => data.push(item))
    return data.sort((a,b) => b-a)[1]
  }
  
  const dataAngka = [9,4,7,7,4,3,2,2,8]
  
  console.log(getAngkaTerbesarKedua(dataAngka)) 
  console.log(getAngkaTerbesarKedua(0)) 
  console.log(getAngkaTerbesarKedua()) 