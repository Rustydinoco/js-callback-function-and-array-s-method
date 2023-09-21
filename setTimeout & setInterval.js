console.log('haloo')

setTimeout(() => {
console.log('haii....');
},3000)  //proses akan dieksekusi dalam 3 detik// 3000 milidetik=3 detik



const int =setInterval(() => {
    console.log(Math.floor(Math.random()*2)+1)
},5000) //akan mengeksekusi proses setiap 5 detik

    //jika ingin menghentikan interval bisa menggunakan clear interval(nama variabel)