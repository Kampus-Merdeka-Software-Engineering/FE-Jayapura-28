

// Mendapatkan tombol logout
const logoutButton = document.getElementById('logoutButton');
const singUp = document.getElementById('signUp');
// Mendapatkan tombol login (opsional)
// Mendapatkan token dari penyimpanan lokal (localStorage)
const token = localStorage.getItem('token');

document.addEventListener('DOMContentLoaded', function() {
    // Tempatkan kode JavaScript Anda di sini
 // Memeriksa apakah pengguna sudah login
if (token) {
    // Pengguna sudah login, tampilkan tombol logout
    logoutButton.style.display = 'block';
    singUp.style.display = 'none';
  } else {
    // Pengguna belum login, sembunyikan tombol logout
    logoutButton.style.display = 'none';
    singUp.style.display = 'block';
  }
  
  
// Event listener untuk tombol logout
logoutButton.addEventListener('click', () => {
  // Hapus token dari penyimpanan lokal
  localStorage.removeItem('token');
  window.location.href = 'index.html';
  alert('logout Sucess');
  // Sembunyikan tombol logout
  logoutButton.style.display = 'none';

  // Tampilkan tombol login (opsional)
});

});