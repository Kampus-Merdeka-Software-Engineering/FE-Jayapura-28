// Frontend code

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', async () => {
  try {
    // Mengirim permintaan logout ke server
    const response = await fetch('https://be-jayapura-28-production-015b.up.railway.app/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Sertakan token atau informasi otentikasi lainnya jika diperlukan
        // Anda mungkin perlu menyimpan token di localStorage atau cookie untuk penggunaan logout
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.ok) {
      // Logout berhasil, hapus token atau data sesi di client-side
      localStorage.removeItem('token');

      // Redirect atau tampilkan pesan sukses
      window.location.href = 'login.html#login';
    } else {
      // Logout gagal, tampilkan pesan kesalahan
      console.error('Logout gagal');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
