function register() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];

    for (var i = 0; i < users.length; i++) {
        if (nama === users[i].nama) {
            alert("Username already exists.");
            return;
        }
    }

    var user = { nama: nama, email: email,pass: pass };
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
}






















// // Fungsi untuk mengecek apakah user telah terdaftar
// function checkUser(nama,email, pass) {
//     var users = JSON.parse(localStorage.getItem("users"));
//     if(users != null) {
//         for(var i=0; i<users.length; i++) {
//             if(users[i].email == email && users[i].pass == pass) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// // Fungsi untuk menambahkan user baru ke dalam local storage
// function addUser(nama,email, pass) {
//     var users = JSON.parse(localStorage.getItem("users"));
//     if(users == null) {
//         users = [];
//     }
//     users.push({nama: nama,email: email, pass: pass});
//     localStorage.setItem("users", JSON.stringify(users));
// }
// // Fungsi untuk melakukan login
// function login() {
//     var nama = document.getElementById("nama").value;
//     var email = document.getElementById("email").value;
//     var pass = document.getElementById("pass").value;
//     if(checkUser(nama,email,pass)) {
//         alert("Login berhasil!");
//     } else {
//         alert("Username atau password salah!");
//     }
// }
// function register() {
//     var nama = document.getElementById("nama").value;
//     var email = document.getElementById("email").value;
//     var pass = document.getElementById("pass").value;
//     addUser(nama,email, pass);
//     alert("Registrasi berhasil!");
// }