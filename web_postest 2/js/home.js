// const nama = localStorage.getItem("nama");

// const show = document.getElementById("show");
// show.innerHTML = ("Hi, ", nama);

localStorage.setItem("nama", "Noviana Ramadhani");
const namaPengguna = localStorage.getItem("nama");
const namaPenggunaElemen = document.getElementById("nama-pengguna");
namaPenggunaElemen.innerHTML = namaPengguna;
