function ganti_kata(kata_object,huruf_yang_dicari,huruf_pengganti){
    // buat variabel string untuk hasil
    let result = "";
    // ubah string ke array agar bisa dimanipulasi
    let kata_object_arr = kata_object.split('');
    
    // looping sebanyak kata_object_arr
    for(var a = 0; a < kata_object_arr.length; a++){
        // jika kata_object_arr index ke-a itu sama dengan huruf_yang_dicari
        if(kata_object_arr[a] === huruf_yang_dicari){
            // hapus kata_object_arr index ke-a
            kata_object_arr.splice(a,1,huruf_pengganti);
        }
        // tambahkan selalu kata_object index ke-a ke-result
        result += kata_object_arr[a];
    }
    // kembalikan hasil
    return console.log(result);
}

// jalankan method dan beri argument
ganti_kata("purwakarta","a","o");