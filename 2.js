function validationForm(username,password){
    // username
    // minimal 5 huruf dan huruf kecil semua.
    if(username.length >= 5){
        // cek jika username mengandung huruf besar
        if(username.match(/[A-Z]/)){
            // maka false
            return console.log(false);
        }
    } else{
        return console.log(false);
    }
    // password
    // password harus diawali 2 digit angka
    if(!password[0].match(/[0-9]/) || !password[1].match(/[0-9]/)  ){
        return console.log(false);
    }
    // jika pass tidak mengandung @ atau & setelah 2 digit angka
    else if(!password[2].match(/[@&]/)){
        return console.log(false);        
    }
    // dari setelah simbol, buat perulangan untuk mengecek satu persatu dari index ke-3
    for(a=3;a<password.length;a++){
        // jika password index ke-a bukan huruf besar
        if(!password[a].match(/[A-Z]/)){
            // maka ketika salah satu index ke-a false, maka return tetap false
            return console.log(false);
        }
    }

    // jika lolos maka true
    return console.log(true)
}

// jalankan func dan beri argument
validationForm('adamcanray','11@ADAM');