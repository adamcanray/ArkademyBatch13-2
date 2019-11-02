function findSame(array){
    // jika parameter adalah array
    if(typeof array == 'object'){
        // buat array kosong untuk hasil
        let result = [];
        // buat object kosong
        let map = {};
        // buat perulangan sebanya panjang array
        for(var a = 0; a < array.length; a++){
            // kecilkan semua huruf pada stringdi array index ke-a
            let strLower = array[a].toLowerCase();
            // split value dari array index ke-a -- 'abc' jadi ['a','b','c']
            let arrSplit = strLower.split('');
            // arrSplit di sort() -- ['b','c','a'] jadi ['a','b','c']
            arrSplit.sort();
            // join array index ke-a yang sudah di sort -- ['a','b','c'] jadi 'abc'
            var arrJoin = arrSplit.join('');
            
            // kita cek jika key 'arrJoin' pada map[arrJoin] belum pernah ada/null
            if(map[arrJoin] == null){
                // buat var l, array kosong
                let l = [];
                // push nilai a saat ini --- a ini akan menjadi wakil index value pada array yang dikirim lewat parameter
                l.push(a);
                // buat keydengan nama "arrJoin" lalu isi map[arrJoin] dengan array l
                map[arrJoin] = l;
            }
            // jika key arrJoin sudah tersedia pada object map[]
            else{
                // maka push saja nilai a sekarang ke-array l yang merupakan value dari key arrJoin
                map[arrJoin].push(a);
            }
        }

        // for selama key l itu ada di map
        // contoh: 
        // l adalah key dari map
        // map{"my":[value],"aadm":[value],"adin":[value]}
        // berati l adalah my, aadm dan adin
        for(var l in map){
            // jika ada pasangan yang anagram maka dia length-nya lebih dari 1
            // maka dari itu kita cek
            if(map[l].length > 1){
                // maka yang masuk ke blok ini adalah kata yang anagram!
                // buat perulangan sebanyak panjang map[l]
                for(var b=0;b<map[l].length;b++){
                    // result di push dengan array index ke-map[l][b] atau index-index yang ada di dalam map[l]/wadah katayang anagram.
                    result.push(array[map[l][b]]);
                }
            }
        }
        // return true, tampilkan result pada console
        return console.log(result);
    }
    // jika bukan array return false
    else{
        console.log("parameter yang diterima bukan array.");
        return false;
    }
}

// jalankan function dan beri argument
findSame(['adma','aAdm','Closing','mada','dAni','dina','sasa']);