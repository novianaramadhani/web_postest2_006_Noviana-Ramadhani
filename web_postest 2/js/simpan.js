 // Kode JavaScript untuk menyimpan dan menampilkan data
      // Mendapatkan form dengan ID myForm
      const myForm = document.getElementById("myForm");

      // Fungsi untuk menyimpan data ke session storage
      function simpanData() {
        // Mendapatkan nilai input dari form
        const nama = myForm.elements["nama"].value;
        const alamat = myForm.elements["alamat"].value;
        const email = myForm.elements["email"].value;
        var durasi = document.getElementById("durasi").value;
        // sessionStorage.setItem("booking", booking);
       
        const cek = myForm.elements["cek"].value;
        const plus = [];
        myForm.querySelectorAll('input[name="plus[]"]:checked').forEach((h) => {
          plus.push(h.value);
        });

        // Mendapatkan data dari session storage
        let data = JSON.parse(sessionStorage.getItem("data")) || [];

        // Menambahkan data baru ke array
        data.push({
          nama,
          alamat,
          email,
          durasi,
          cek,
          plus,
        });

        // Menyimpan data ke session storage
        sessionStorage.setItem("data", JSON.stringify(data));

        // Reset form
        myForm.reset();

        alert("Data berhasil disimpan.");
      }