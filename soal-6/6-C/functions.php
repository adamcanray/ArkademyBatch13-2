<?php
// koneksi ke database
$konek = mysqli_connect('localhost', 'root', '', 'arkademy_batch_13_2');

// fungsi query
function query($query)
{
    // global koneksi
    global $konek;
    // result adalah query ke paramter yang diberikan
    $result = mysqli_query($konek, $query);
    //  array untuk menampung data
    $rows = [];
    // buat perulangan sebanyak data yang ada didatabase
    // ambil semua data dari hasil query di $result berdasarkan baris nya
    while ($row = mysqli_fetch_assoc($result)) {
        // masukan setiap baris dari $row ke array $rows
        $rows[] = $row;
    }
    // kembalikan nilai $rows
    // ps: tanpa $rows dan $row sebenarnya bisa langsung return ke $result, hanya saja agar bisa dilihat data apa saja yang didapat ketika menjalankan query
    return $rows;
}