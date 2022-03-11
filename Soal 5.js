function getSplitName(personName) {
    if ( typeof(personName) == 'string'){
        var namaFull = personName.split(' ');

        if ( namaFull.length <= 3 ) {

            if (namaFull.length == 3){
                var namaAwal = personName.split(' ')[0];
                var namaTengah = personName.split(' ')[1]; 
                var namaTerakhir = personName.split(' ')[2];
                var nama = {
                    namaAwal: namaAwal,
                    namaTengah: namaTengah,
                    namaTerakhir: namaTerakhir,
                };
            return nama;
            }
            
            else if (namaFull.length == 2){
                var namaAwal = personName.split(' ')[0];
                var namaTengah = null;
                var namaTerakhir = personName.split(' ')[1];
                var nama = {
                    namaAwal: namaAwal,
                    namaTengah: namaTengah,
                    namaTerakhir: namaTerakhir,
                };
            return nama;
            }

            else {
                var namaAwal = personName.split(' ')[0];
                var namaTengah = null;
                var namaTerakhir = null;
                var nama = {
                    namaAwal: namaAwal,
                    namaTengah: namaTengah,
                    namaTerakhir: namaTerakhir,
                };
            return nama;
            }
        }
        else {
            return 'Error: This function is only for 3 characters name';
        }
    }
    else{
        return 'Error: Name must be filled with type string';
    }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));