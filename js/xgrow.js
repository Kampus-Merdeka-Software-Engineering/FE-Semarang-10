
// Style JavaScript di buat oleh XGROW

// Function Navigasi Bar Smooth (Navbar) (Awal)
document.querySelectorAll("nav a").forEach((tautan) => {
  tautan.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
          e.preventDefault();
          const idTujuan = href.substring(1);
          const tujuan = document.getElementById(idTujuan);
          
          if (tujuan) {
              tujuan.scrollIntoView({
                  behavior: "smooth",
              });
          }
      }
  });
});
// Function Navigasi Bar Smooth (Navbar) (Akhir)


// Href aktif di A (Navbar) (Awal)
document.addEventListener("DOMContentLoaded", function () {
  const bagian = document.querySelectorAll("section");
  const tautanNavigasi = document.querySelectorAll("nav a");
  tautanNavigasi[0].classList.add("aktif");

  document.addEventListener("scroll", function () {
    bagian.forEach((bagian) => {
      const rect = bagian.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        const idBagian = bagian.getAttribute("id");
        const tautanAktif = document.querySelector(
          `nav a[href="#${idBagian}"]`
        );
        tautanNavigasi.forEach((tautan) => {
          tautan.classList.remove("aktif");
        });
        tautanAktif.classList.add("aktif");
      }
    });
  });
});
// Href aktif di A (Navbar) (Akhir)



// Function Gambar (Home) (Awal)
  document.addEventListener("DOMContentLoaded", function () {
    var imgHome = document.getElementById("imgHomeUbah");
    imgHome.classList.add("tampil");
  });
// Function Gambar (Home) (Akhir)


// Function Ubah Teks (Home) (Awal)
  const elemenUbahTeks = document.getElementById(
    "teksHomeUbah"
  );
  const kataKunci = [
    "keterampilan",
    "informatika",
    "ekonomi",
    "sistem informasi",
    "manajemen",
  ];
  let indeksKataSaatIni = 0;
  function ubahKata() {
    elemenUbahTeks.textContent = kataKunci[indeksKataSaatIni];
    indeksKataSaatIni = (indeksKataSaatIni + 1) % kataKunci.length;
  }
  setInterval(ubahKata, 4000);
// Function Ubah Teks (Home) (Akhir)


// Function Prome Teks (Promo) (Awal)
  // - Variabel
  const gambarPromosi = document.querySelector('.promo-image img');
  const teksPromosi = document.querySelector('.promo-text');
  const promosi = [
    {
      gambar: 'assets/img-promo/img-p2.png',
      judul: 'PROMO NAIK KELAS',
      deskripsi: 'Dengan menggunakan kode voucher GRUB10SMG, Anda akan mendapatkan potongan harga hingga 50% di tambah mode membaca modul hingga 300 hari, syarat dan ketentuan berlaku.',
    },
    {
      gambar: 'assets/img-promo/img-p.png',
      judul: 'PROMO KERJA KELOMPOK',
      deskripsi: 'Anda hanya membayar 1 harga untuk 1 kelompok pembelajaran. Untuk mendapatkannya isi kode promo yang kami kirim di IG Story XGrow',
    },
    {
      gambar: 'assets/img-promo/img-p4.png',
      judul: '💡 TAHUKAH ANDA',
      deskripsi: 'Setiap waktu yang Anda luangkan untuk belajar di XGrow adalah kontribusi Anda dalam membantu anak-anak untuk Merdeka Belajar, 85 Menit = 1 Buku.',
    },
    {
      gambar: 'assets/img-promo/img-p3.png',
      judul: 'XPRO - GROW',
      deskripsi: 'Jika Anda suka membuat jurnal, konversikan untuk menjadi keuntungan harga. Kami akan menilai jurnal Anda, untuk mencapai 90% beasiswa karier Anda.',
    },
  ];

  let indeksPromoSaatIni = 0;

  // - Fungsi untuk mengganti teks promo
  function gantiPromo() {
    gambarPromosi.classList.remove('fade-masuk');
    gambarPromosi.classList.add('fade-keluar');
    teksPromosi.classList.remove('fade-masuk');
    teksPromosi.classList.add('fade-keluar');

    setTimeout(() => {
      indeksPromoSaatIni = (indeksPromoSaatIni + 1) % promosi.length;

      gambarPromosi.src = promosi[indeksPromoSaatIni].gambar;
      teksPromosi.querySelector('h1').textContent = promosi[indeksPromoSaatIni].judul;
      teksPromosi.querySelector('p').textContent = promosi[indeksPromoSaatIni].deskripsi;

      gambarPromosi.classList.remove('fade-keluar');
      gambarPromosi.classList.add('fade-masuk');
      teksPromosi.classList.remove('fade-keluar');
      teksPromosi.classList.add('fade-masuk');
    }, 1000);
  }
  setInterval(gantiPromo, 6000);

// Function Prome Teks (Promo) (Akhir)

// Kontak toggle (Kontak) (Awal)
  const tampilFormKontakTombol = document.getElementById('tampilFormKontak');
  const tampilFormBerlanggananTombol = document.getElementById('tampilFormBerlangganan');
  const formKontak = document.getElementById('formKontak');
  const formBerlangganan = document.getElementById('formBerlangganan');

    function aktifkanFormKontak() {
        formKontak.classList.add('aktif');
        formBerlangganan.classList.remove('aktif');
    }

    function aktifkanFormBerlangganan() {
        formBerlangganan.classList.add('aktif');
        formKontak.classList.remove('aktif');
    }

  tampilFormKontakTombol.addEventListener('click', aktifkanFormKontak);
  tampilFormBerlanggananTombol.addEventListener('click', aktifkanFormBerlangganan);

  window.addEventListener('load', aktifkanFormKontak);
// Kontak toggle (Kontak) (Akhir)
