// 1.every = akan mengembalikan nilai boolean.True pada saat SELURUH nilai bernilai yang ada didalam array memenuhhi kriteria,False jika sebaliknya

// EVERY
const nilaiGenap =[2,4,6,8,10,64,44]
const isTruegenap=nilaiGenap.every(genap => genap % 2===0) 
// expected output = True

const nilaiGanjil =[1,4,5,7,9,11,15]
const isTrueganjil=nilaiGanjil.every(ganjil =>ganjil % 2===1) 
// expected output = False ==> karena 4 tidak merupakan bilangan ganjil

////////////////////////////////////////////////////////////////////////////////////////////////

// 2.some = mirip dengan 'every' tetapi lebih fleksibel jika salah satu nilai di dalam array yg tidak memenuhi kriteria hasilnya tetap true,jika semua nilai tidak memenuhi kriteria maka false

// SOME
const kata = ['halo','hayuk','hehe','wkwk']
const isKata = kata.some(kata => kata.length === 4)
// expected output = True ==> nilai yang salah satu jadi tetep dianggap true

const kata2 = ['hai','hayuk','heh','wkw']
const isKata2 = kata2.some(kata2 => kata2.length === 4)
// expected output = false ==> semua nilainya tidak memenuhi kriteria

