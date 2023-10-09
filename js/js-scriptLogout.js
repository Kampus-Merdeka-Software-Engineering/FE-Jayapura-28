// JavaScript di halaman Anda
const logoutButton = document.getElementById('logoutButton');

// Fungsi untuk mengatur tampilan tombol "Log Out" berdasarkan status login
function setLogoutButtonVisibility(loggedIn) {
    if (loggedIn) {
        logoutButton.style.display = 'inline-block'; // Menampilkan tombol "Log Out"
    } else {
        logoutButton.style.display = 'none'; // Menyembunyikan tombol "Log Out"
    }
}


// Ketika tombol "Log Out" diklik
logoutButton.addEventListener('click', async () => {
    try {
        const response = await fetch('https://be-jayapura-28-production-015b.up.railway.app/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.redirected) {
            // Jika server mengarahkan kembali ke halaman log in, maka pengguna diarahkan ke sana
            window.location.href = response.url;
        }
    } catch (error) {
        console.error('Error logging out:', error);
    }
});

// Panggil fungsi setLogoutButtonVisibility() saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Lakukan pengecekan status login pada server dan terima status login dari server
    // Misalnya, setelah pengguna berhasil login, atur loggedIn menjadi true
    const loggedIn = true; // Gantilah dengan status login yang sesuai dari server

    // Panggil fungsi untuk mengatur tampilan tombol "Log Out" berdasarkan status login saat halaman dimuat
    setLogoutButtonVisibility(loggedIn);
});
