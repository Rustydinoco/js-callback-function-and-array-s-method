const add = function(x){     //ini function biasa
    return x+x*x
}


const add2 =(x)=>{      //ini arrow function //tidak memakai syntax function dan menggantinya dengan tanda "=>"
    return x+x*x
}

// manfaat dari arrow function adalah syntax yang lebih sederhana
// arrow function cocok digunakan dalam situasi yang sederhana dan tidak memerlukan function yang kompleks/panjang kode hanya satu baris

////////////////////////////////////////////////////////////////////////////////////////////////////

// return implisit dalam arrow function

const add3 = (x)=>(  //return implisit arrow function tidak perlu menuliskan 'return'
    x+x*x            //perbedaannya adalah mengganti {} menjadi ()
);
    

const add4 = (a, b)=> a+b //bisa juga langsung menuliskan kodenya tanpa menggunakan ()
                          //asalkan kode sederhana atau hanya terdiri dari satu baris 