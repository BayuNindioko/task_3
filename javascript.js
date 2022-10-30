//membuat teks kedalam tag p pada header
var changeText = document.querySelector('header h1');
changeText.innerText = 'Bayu Nindioko (no.1 js)';

document.getElementById("teks").innerHTML = "Teks ditambahkan <br> menggunakan javascript";

//membuat element h2 kedalam id/class tentang
var hasil = document.querySelector('#tentang');
var newElemen = document.createElement("h2");
var teksElemen = document.createTextNode('Element baru ditambah menggunakan javascript');
newElemen.appendChild(teksElemen);
hasil.appendChild(newElemen);

//membuat element yang dinamis berdasarkan event handler tertentu
//menampilkan waktu
function displayDate() {
    document.getElementById("waktu").innerHTML = Date();
}

//menambah list pada class training
const tambah = document.getElementById('tambah');

tambah.addEventListener('click', function () {
    const ul= document.querySelector('.training ul');
    const liBaru=document.createElement('li');
    const teks = document.createTextNode('List baru berhasil ditambah!');
    liBaru.appendChild(teks);
    ul.appendChild(liBaru);
});




