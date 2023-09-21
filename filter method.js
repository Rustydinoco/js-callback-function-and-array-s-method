// filter method adalah umtuk memfilter dan mengambil elemen elemen tertentu dari array/object

const angka =[1,2,3,4,5,6,7,8,9];
const angkaGanjil =angka.filter((n)=>n% 2==1)


const buah =[
    {
        nama: 'mangga',
        rasa : 'manis',
        qty : 10
    },
    {
        nama: 'nanas',
        rasa : 'asam',
        qty : 25
    },
    {
        nama: 'jambu',
        rasa : 'manis',
        qty :40
    },
]
const buahManis= buah.filter(manis =>manis.qty > 0).map(taste => taste.nama)