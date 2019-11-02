function randomize(number){
    // cek jika parameter bukan angka
    if(typeof number !== 'number'){
        // maka return false
        return console.log(false);
    } 
    // jika angka
    else{
        // buat minimal dan maksimal random number
        let min = 1;
        let max = 10;
        // buat array kosong
        let array = [];
        // looping sebanyak number
        for(var i=0;i<number;i++){
            // buat angka random
            let randomNumber = Math.floor(Math.random() * (max - min) + min);
            // push setiap randomNumber ke array
            array.push(randomNumber);
        }
        // penjumlahan isi array
        let sum = array.reduce((a,b) => a + b);
        // 
        return console.log("array : [" + array + "]\nsum : " + sum);
    }
}
// jalankan func dan beri argument
randomize(6)

// ###!!!!Abaikan!!!!###
// Math.floor() -> membulatkan bilangan decimal(memiliki koma)
// Math.random() = 0.001 - 0.999
// Math.random() * 9 = 1-9
// Math.random() * 9 + 1 = 1-10
// let randomNumber = Math.floor(Math.random() * (max - min) + min);
// reduce(functionDefault,valueOptionalKetikaArrayKosong)
// let sum = array.reduce((a,b) => a + b);