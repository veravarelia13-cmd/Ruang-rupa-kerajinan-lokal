// Fungsi memilih produk
function pilihProduk(namaProduk) {

    alert(
        "Kamu memilih produk: " + namaProduk +
        "\nSilakan hubungi kami untuk informasi pemesanan."
    );

}

// Menampilkan pesan ketika website dibuka
console.log("Selamat datang di website Ruang Rupa!");

// Efek klik menu navigasi
const menu = document.querySelectorAll("nav a");

menu.forEach(function(link) {

    link.addEventListener("click", function() {
        console.log("Kamu membuka halaman: " + link.textContent);
    });

});