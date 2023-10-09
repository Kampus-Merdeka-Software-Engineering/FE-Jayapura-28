const feedbackForm = document.getElementById("feedbackForm");
feedbackForm.addEventListener("submit", async function(event) {
    event.preventDefault(); // Mencegah formulir dikirim secara otomatis

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const saran = document.getElementById("masukan").value;

    // Mengirim data ke server
    try {
        const response = fetch("https://be-jayapura-28-production-015b.up.railway.app//submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nama, email, saran }),
        });
        alert("Terima Kasih, tanggapan Anda telah terkirim!");
        feedbackForm.reset(); // Mengosongkan formulir setelah pengiriman
    } catch (error) {
        console.error("Error:", error);
    }
});