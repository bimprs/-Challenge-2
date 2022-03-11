function checkTypeNumber(givenNumber){

    if (typeof(givenNumber)== "number") {
        if (givenNumber % 2 !== 0){
            result = "GANJIL"
        }
        else if (givenNumber % 2 == 0){
            result = 'GENAP'
        }
        else if(givenNumber = 0){
            result = 'GENAP'
        }
    } 
    else if (typeof(givenNumber)== "undefined") {
        result = "Error: Bro where is the parameter? ";
    }
    else{
        result = "Error: Invalid data type"
    }
    return result;
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());