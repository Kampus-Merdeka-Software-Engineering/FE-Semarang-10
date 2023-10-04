
/*----------------------------------------------------------------------------
JS Style ini di buat oleh Grub 10 Section Semarang untuk Company Profil XGrow
------------------------------------------------------------------------------*/

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
  function hapusKelasAktif() {
    tautanNavigasi.forEach((tautan) => {
      tautan.classList.remove("aktif");
    });
  }
  function tentukanTautanNavigasiAktif() {
    bagian.forEach((bagian) => {
      const rect = bagian.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        const idBagian = bagian.getAttribute("id");
        const tautanAktif = document.querySelector(
          `nav a[href="#${idBagian}"]`
        );
        hapusKelasAktif();
        tautanAktif.classList.add("aktif");
      }
    });
  }
  tentukanTautanNavigasiAktif();
  document.addEventListener("scroll", function () {
    tentukanTautanNavigasiAktif();
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
  setInterval(ubahKata, 3000);
// Function Ubah Teks (Home) (Akhir)



// Function Prome Teks (Promo) (Awal)
  // --- Variabel
  const gambarPromosi = document.querySelector('.promo-image img');
  const teksPromosi = document.querySelector('.promo-text');
  const promosi = [
    {
      gambar: 'assets/img-promo/img-p.gif',
      judul: 'XGROW PROMO DATA ANALYTICS',
      deskripsi: 'Dengan menggunakan kode voucher "BELAJARDATA", Anda akan mendapatkan potongan harga hingga 50% promo ini khusus bagi Pelajar dan Mahasiswa, syarat dan ketentuan berlaku.',
    },
    {
      gambar: 'assets/img-promo/img-p2.gif',
      judul: 'PROGRAM XGROW-PRO',
      deskripsi: 'Ajukan karya ilmiah Anda untuk beasiswa belajar 100% bagi karya dengan nilai sangat baik, syarat dan ketentuan berlaku.',
    },
    {
      gambar: 'assets/img-promo/img-p3.gif',
      judul: 'PROGRAM ANAK BANGSA',
      deskripsi: 'PROGRAM ANAK BANGSA XGROW adalah program yang memberikan fasilitas penunjang pendidikan 100%, dalam program ini XGROW menyediakan Kuota Internet, Laptop dan Modul cetak secara GRATIS. Program ini khusus bagi mahasiswa semester 1 dan 2 yang belajar di XGROW dengan syarat dan ketentuan berlaku. Syarat dan ketentuan berlaku.',
    },
    {
      gambar: 'assets/img-promo/img-p4.gif',
      judul: 'XGROW PROMO SOFTWARE ENGINEERING 2023',
      deskripsi: 'Anda akan mendapatkan keuntungan potongan harga hingga 30% dengan menggunakan kode XGROW_SE23, Dalam program belajar Anda akan belajar 40 Jam front end dan 60 jam back end serta 30 jam database, Anda juga Anda akan belajar teknologi terkini. Syarat dan ketentuan berlaku. ',
    },
    {
      gambar: 'assets/img-promo/img-p5.gif',
      judul: 'XGROW PROMO PROGRAMMER',
      deskripsi: 'Gunakan kode voucer “XGROWDEV” dan dapatkan potongan harga hingga 50%, khusus untuk pilihan bidan pemrigraman. Promo ini dapat digunakan 2 kali pada masa pembelajaran, selama kelas masih tersedia. Syarat dan ketentuan berlaku. ',
    },
  ];
  let indeksPromoSaatIni = 0;
  // --- Fungsi untuk mengganti teks promo
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
  setInterval(gantiPromo, 7000);
// Function Promo Teks (Promo) (Akhir)



// - Fungsi untuk card slide (program) (Awal)
  const buttonSebelumnya = document.getElementById("buttonSebelumnya");
  const buttonSelanjutnya = document.getElementById("buttonSelanjutnya");
  const kontainer = document.querySelector(".section-tengah");
  let jumlahGeser = 0;
  const lebarKartu = 720;
  buttonSebelumnya.addEventListener("click", () => {
      jumlahGeser -= lebarKartu;
      if (jumlahGeser < 0) {
          jumlahGeser = 0;
      }
      kontainer.scroll({
          top: 0,
          left: jumlahGeser,
          behavior: "smooth",
      });
  });
  buttonSelanjutnya.addEventListener("click", () => {
      jumlahGeser += lebarKartu;
      if (jumlahGeser > kontainer.scrollWidth - kontainer.clientWidth) {
          jumlahGeser = kontainer.scrollWidth - kontainer.clientWidth;
      }
      kontainer.scroll({
          top: 0,
          left: jumlahGeser,
          behavior: "smooth",
      });
  });
// - Fungsi untuk card slide (program) (Akhir)



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

