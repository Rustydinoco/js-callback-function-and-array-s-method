// forEach adlah salah satu callback function yang dapat memanggil (callback) sebuah fungsi sebanyayk jumlah element yang dimiliki array



const nilai =[78,90,45,66,67,87,44,35,65];

nilai.forEach(function(hasil){
    if(hasil <70){
        console.log(hasil)
    }
}
)
// expected output:45,66,67,44,35,65



const penjumlahan =[78,90,45,66,67,87,44,35,65];
 
penjumlahan.forEach(function(bagiTiga){
    if(bagiTiga % 3===0){
        console.log(bagiTiga)
    }
})
// expected output:78,90,45,66,87