// Fungsi untuk kirim form kontak (Kontak) (Awal)
function kirimForm(event) {
    event.preventDefault();

    const form = document.getElementById("myForm");
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