// // JavaScript di halaman Anda
// const logoutButton = document.getElementById('logoutButton');

// // Fungsi untuk mengatur tampilan tombol "Log Out" berdasarkan status login
// // Mendapatkan token dari penyimpanan lokal (localStorage)
// const token = localStorage.getItem('token');

// Mendapatkan token dari penyimpanan lokal (localStorage)
const token = localStorage.getItem('token');


// Memeriksa apakah pengguna sudah login
if (token) {
  // Pengguna sudah login, tampilkan tombol logout
  logoutButton.style.display = 'block';
} else {
  // Pengguna belum login, sembunyikan tombol logout
  logoutButton.style.display = 'none';
}


// logoutButton.addEventListener('click', async () => {
//   try {
//     // Mengirim permintaan logout ke server
//     const response = await fetch('https://be-jayapura-28-production-015b.up.railway.app/logout', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // Sertakan token atau informasi otentikasi lainnya jika diperlukan
//         // Anda mungkin perlu menyimpan token di localStorage atau cookie untuk penggunaan logout
//         'Authorization': `Bearer ${localStorage.getItem('token')}`,
//       },
//     });

//     if (response.ok) {
//       // Logout berhasil, hapus token atau data sesi di client-side
//       localStorage.removeItem('token');

//       // Redirect atau tampilkan pesan sukses
//       window.location.href = 'login.html#login';
//     } else {
//       // Logout gagal, tampilkan pesan kesalahan
//       console.error('Logout gagal');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// });

// Frontend code

// Mendapatkan tombol logout
const logoutButton = document.getElementById('logout-button');

// Mendapatkan tombol login (opsional)
const loginButton = document.getElementById('loginBtn');



// Event listener untuk tombol logout
logoutButton.addEventListener('click', () => {
  // Hapus token dari penyimpanan lokal
  localStorage.removeItem('token');

  // Sembunyikan tombol logout
  logoutButton.style.display = 'none';

  // Tampilkan tombol login (opsional)
  if (loginButton) {
    loginButton.style.display = 'block';
  }
});

// // Event listener untuk tombol login (opsional)
// if (loginButton) {
//   loginButton.addEventListener('click', () => {
//     // Implementasikan logika login atau navigasi ke halaman login
//     // ...
//   });
// }
