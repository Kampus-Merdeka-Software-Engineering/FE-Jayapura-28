
    // JavaScript untuk menampilkan pop-up saat gambar profil diklik
    const profileImage = document.getElementById('profileImage');
    const popupContainer = document.getElementById('popupContainer');
    const logoutButton = document.getElementById('logoutButton');

    // Simulasikan informasi pengguna yang masuk
    const user = {
        name: 'Nama Pengguna',
        profileImageURL: 'img/logo.jpeg'
    };

    // Fungsi untuk menampilkan pop-up saat gambar profil diklik
    function showProfilePopup() {
        popupContainer.style.display = 'block';
    }

    // Fungsi untuk logout pengguna
    function logoutUser() {
        // Tambahkan kode logout sesuai dengan kebutuhan aplikasi Anda
        // Misalnya, hapus token sesi atau hapus data sesi.
        // Setelah logout, sembunyikan pop-up
        popupContainer.style.display = 'none';
    }

    profileImage.addEventListener('click', showProfilePopup);
    logoutButton.addEventListener('click', logoutUser);
