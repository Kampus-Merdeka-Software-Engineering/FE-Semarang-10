// Fungsi untuk kirim form kontak (Kontak) (Awal)
function kirimForm(event) {
    event.preventDefault();

    const form = document.getElementById("kontakForm");
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;
    const data = {
        nama: nama,
        email: email,
        pesan: pesan
    };

    fetch("https://back-end-capstone-project-section-semarang-group-10.bimamaarschal.repl.co/api/kontak", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        tampilkanPopup("Terima kasih pesan Anda berhasil dikirim, kami segera menghubungi Anda");
        form.reset();
    })
    .catch(error => {
        console.error(error);
        tampilkanPopup("Terjadi kesalahan saat mengirim pesan.");
    });
}
// Fungsi untuk kirim form kontak (Kontak) (Akhir)

// Fungsi untuk kirim form berlangganan (Kontak) (Awal)
function kirimFormBerlangganan(event) {
    event.preventDefault();
    const form = document.getElementById("berlanggananForm");
    const email = document.getElementById("emailBerlangganan").value;
    const data = {
        email: email
    };

    fetch("https://back-end-capstone-project-section-semarang-group-10.bimamaarschal.repl.co/api/berlangganan", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData);
        tampilkanPopup(`Terima kasih email ${email}, telah berhasil berlangganan info terkini dari XGrow!`);
        form.reset();
    })
    .catch(error => {
        console.error(error);
        tampilkanPopup("Terjadi kesalahan saat berlangganan.");
    });
}
// Fungsi untuk kirim form berlangganan (Kontak) (Akhir)


// Fungsi untuk menampilkan pesan PopUp (Awal)
function tampilkanPopup(pesan) {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const popupMessage = document.getElementById("popupMessage");

    popupMessage.textContent = pesan;
    popup.style.display = "block";
    overlay.style.display = "block";
}
// Fungsi untuk menampilkan pesan PopUp  (Akhir)


// Fungsi untuk menampilkan tutup pesan PopUp (Awal)
function tutupPopup() {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    
    popup.style.display = "none";
    overlay.style.display = "none";
}
// Fungsi untuk menampilkan tutup pesan PopUp (Akhir)

// Fungsi untuk menampilkan Info Berita (Awal)
const apiUrl = 'https://back-end-capstone-project-section-semarang-group-10.bimamaarschal.repl.co/api/infoberita';

async function fetchData() {
  const kontainerMarquee = document.getElementById('marquee-container');
  kontainerMarquee.textContent = 'Mohon tunggu, sedang memproses pengambilan data...';
  try {
    const respons = await fetch(apiUrl);
    const data = await respons.json();
    const beritaList = data.map(item => `(${item.tanggal}) ${item.berita} `).join('  🌐  ');
    kontainerMarquee.innerHTML = `<marquee>${beritaList}</marquee>`;
  } catch (error) {
    console.error('Kesalahan data:', error);
    kontainerMarquee.textContent = 'Terjadi kesalahan saat mengambil data.';
  }
}
fetchData();
// Fungsi untuk menampilkan Info Berita (Akhir)

// Fungsi untuk menampilkan data home (Awal)
const dataHomeUrl = 'https://back-end-capstone-project-section-semarang-group-10.bimamaarschal.repl.co/api/datahome';
async function fetchDataHome() {
    try {
        const response = await fetch(dataHomeUrl);
        const data = await response.json();
        if (data.length > 0) {
        const dataItem = data[0];
        document.getElementById('jumlahPengguna').textContent = dataItem.pengguna;
            document.getElementById('jumlahMentor').textContent = dataItem.mentor;
            document.getElementById('jumlahAlumni').textContent = dataItem.alumni;
            document.getElementById('keberhasilanBelajar').textContent = dataItem.keberhasilan;
        }
    } catch (error) {
        console.error('Kesalahan data home:', error);
    }
}
fetchDataHome();
// Fungsi untuk menampilkan data home (Akhir)

// Fungsi untuk menampilkan data program unggulan (Awal)
const urlUnggulan = 'https://back-end-capstone-project-section-semarang-group-10.bimamaarschal.repl.co/api/unggulan';
const kontainerKartu = document.getElementById('kartu-container');
async function ambilDataDanTampilkanKartu() {
  try {
    const respons = await fetch(urlUnggulan);
    const data = await respons.json();
    for (let i = 0; i < Math.min(data.length, 10); i++) {
      const item = data[i];
      const kartu = document.createElement('div');
      kartu.classList.add('kartu');
      kartu.innerHTML = `
        <img src="assets/img/produk manajemen.jpeg" alt="${item.judul}" />
        <h2>${item.judul}</h2>
        <p>${item.keterangan}</p>
        <button>Tambah Kursus</button>
      `;
      kontainerKartu.appendChild(kartu);
    }
  } catch (error) {
    console.error('Kesalahan data unggulan:', error);
  }
}
ambilDataDanTampilkanKartu();
// Fungsi untuk menampilkan data program unggulan (Akhir)

// Fungsi untuk menampilkan data program baru (Awal)
const urlPbaru = 'https://back-end-capstone-project-section-semarang-group-10.bimamaarschal.repl.co/api/pbaru';
const kontainerKartuPbaru = document.getElementById('kartu-container-pbaru');
async function ambilDataDanTampilkanKartuPbaru() {
  try {
    const respons = await fetch(urlPbaru);
    const dataPbaru = await respons.json();
    for (let i = 0; i < Math.min(dataPbaru.length, 10); i++) {
      const itemPbaru = dataPbaru[i];
      const kartuPbaru = document.createElement('div');
      kartuPbaru.classList.add('kartu');
      kartuPbaru.innerHTML = `
        <img src="assets/img/produk manajemen.jpeg" alt="${itemPbaru.judul}" />
        <h2>${itemPbaru.judul}</h2>
        <p>${itemPbaru.keterangan}</p>
        <button>Tambah Kursus</button>
      `;
      kontainerKartuPbaru.appendChild(kartuPbaru);
    }
  } catch (error) {
    console.error('Kesalahan data pbaru:', error);
  }
}
ambilDataDanTampilkanKartuPbaru();
// Fungsi untuk menampilkan data program baru (Akhir)

