
// Fade respon gambar
  document.addEventListener("DOMContentLoaded", function () {
    var image = document.getElementById("home-fade-image");
    image.classList.add("loaded");
  });
  
// Teks changing
  const changingTextElement = document.getElementById(
    "home-text-changing"
  );
  const words = [
    "keterampilan",
    "informatika",
    "ekonomi",
    "sistem informasi",
    "manajemen",
  ];
  let currentWordIndex = 0;
  function changeWord() {
    changingTextElement.textContent = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length;
  }
  setInterval(changeWord, 4000);

// Ketika tautan di navbar di-klik
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Cek apakah tautan mengarah ke halaman lain
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1); // Hilangkan karakter '#' dari href
      const target = document.getElementById(targetId);
    
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});


  
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
    navLinks[0].classList.add("active");
  
    document.addEventListener("scroll", function () {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          const sectionId = section.getAttribute("id");
          const activeLink = document.querySelector(
            `nav a[href="#${sectionId}"]`
          );
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });
          activeLink.classList.add("active");
        }
      });
    });
  });
  

  // Ambil elemen-elemen yang diperlukan
const promoImage = document.querySelector('.promo-image img');
const promoText = document.querySelector('.promo-text');

// Data promo (gambar dan teks)
const promos = [
  {
    image: 'assets/img-promo/img-p.png',
    title: 'PROMO KERJA KELOMPOK',
    description: 'Anda hanya membayar 1 harga untuk 1 kelompok pembelajaran. Untuk mendapatkannya isi kode promo yang kami kirim di IG Story XGrow',
  },
  {
    image: 'assets/img-promo/img-p2.png',
    title: 'PROMO NAIK KELAS',
    description: 'Dengan mengunakan kode voucher GRUB10SMG, Anda akan mendapatkan potongan harga hingga 50% di tambah mode membaca modul hingga 300hari, syarat dan ketentuan berlaku.',
  },
  {
    image: 'assets/img-promo/img-p4.png',
    title: 'TAHUKAH ANDA',
    description: 'Setiap waktu yang di luangkan untuk belajar di XGrow adalah kontribusi Anda dalam membantu anak-anak untuk Merdeka Belajar, 85 Menit = 1 Buku.',
  },
  {
    image: 'assets/img-promo/img-p3.png',
    title: 'XPRO - GROW',
    description: 'Jika Anda suka membuat jurnal, konversikan untuk menjadi keuntungan harga. Kami akan menilai jurnal Anda, untuk mencapai 90% beasiswa karir Anda.',
  },
];

let currentPromoIndex = 0;

// Fungsi untuk mengganti promo
function changePromo() {
  promoImage.classList.remove('fade-in');
  promoImage.classList.add('fade-out');
  promoText.classList.remove('fade-in');
  promoText.classList.add('fade-out');

  setTimeout(() => {
    currentPromoIndex = (currentPromoIndex + 1) % promos.length;

    promoImage.src = promos[currentPromoIndex].image;
    promoText.querySelector('h1').textContent = promos[currentPromoIndex].title;
    promoText.querySelector('p').textContent = promos[currentPromoIndex].description;

    promoImage.classList.remove('fade-out');
    promoImage.classList.add('fade-in');
    promoText.classList.remove('fade-out');
    promoText.classList.add('fade-in');
  }, 1000);
}

// Atur interval untuk mengganti promo setiap 3 detik
setInterval(changePromo, 10000);
