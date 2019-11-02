// start
function biodata(name,age){
    // data
    var name = name;
    var age = age;
    var address = "Kp.Cikoneng Girang Rt01/Rw05 Kel.Manis jaya, Kec.Jatiuwung, Kota Tangerang, Banten.";
    var hobbies = ['Sepak Bola','Futsal','Belajar Coding'];
    var is_married = false;
    var list_school = {
        name : "SMK NEGERI 1 KOTA TANGERANG",
        year_in : "2016",
        year_out : "2019",
        major : "Multimedia"
    };
    var skills = {
        skill_name : 'Web Developer',
        level : 'advanced'
    };
    interest_in_coding = true;

    // wadah
    let result = {name,age,address,hobbies,is_married,list_school,skills,interest_in_coding};
    // ubah tipe object menjadi JSON
    let json_result = JSON.stringify(result)

    // kembalikan value JSON pada console
    return json_result;
} // end
// jalankan func dan beri argument
console.log(biodata("Muhammad Adam Canrayneldy", 18))