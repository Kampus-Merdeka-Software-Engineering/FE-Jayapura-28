// Ambil elemen tombol hamburger dan daftar menu
const menuToggle = document.getElementById("menuToggle");
const navList = document.getElementById("menu");

// Tambahkan event listener untuk tombol hamburger
menuToggle.addEventListener("click", function () {
    // Toggle class "active" pada daftar menu
    navList.classList.toggle("active");
});
