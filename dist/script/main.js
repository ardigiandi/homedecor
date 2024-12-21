const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form untuk mengirimkan halaman secara otomatis

    // Ambil data dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validasi input (optional)
    if (name === "" || email === "" || message === "") {
      alert("Semua kolom harus diisi!");
      return;
    }

    // Simulasi pengiriman data (contoh dengan alert)
    alert(
      `Pesan Anda telah terkirim!\n\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`
    );

    // Setelah pengiriman, reset form
    document.getElementById("contactForm").reset();
  });
