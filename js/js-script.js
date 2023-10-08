 // script.js
 document.addEventListener("DOMContentLoaded", function () {
    const spesialisSelect = document.getElementById("spesialis");
    const dokterSelect = document.getElementById("dokter");
    const bookingForm = document.getElementById("bookingForm");
    const hasilTabel = document.getElementById("hasilTabel");
    const downloadButton = document.getElementById("downloadButton");

    const token = localStorage.getItem("token");

if (!token) {
    // Pengguna belum login, alihkan ke halaman login
    alert("anda belum login");
    window.location.href = "login.html#login-Form";
} else {
    // Validasi token di sini (gunakan fungsi yang sesuai)
    if (!isValidToken(token)) {
        // Token tidak valid, alihkan ke halaman login
        window.location.href = "login.html#login-Form";
    }

    // Mengirimkan permintaan booking dengan token dalam header
    fetch("https://be-jayapura-28-production-10e1.up.railway.app/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Mengirim token sebagai bagian dari header
            },
            // ... data booking
        })
        .then((res) => {
            res.status(200);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
}

    // Data rumah sakit, spesialis, dan dokter dalam bentuk array
    const dataRumahSakit = [
        {
            name: "RSUD Boven Digeol",
            spesialis: [
                {
                    name: "Spesialis X",
                    dokter: ["Dokter 1X", "Dokter 2X", "Dokter 3X"],
                },
                {
                    name: "Spesialis Y",
                    dokter: ["Dokter 1Y", "Dokter 2Y", "Dokter 3Y"],
                },
                {
                    name: "Spesialis U",
                    dokter: ["Dokter 1Y", "Dokter 2Y", "Dokter 3Y"],
                },
            ],
        },
        {
            name: "RSUD Kwaingga",
            spesialis: [
                {
                    name: "Spesialis Z",
                    dokter: ["Dokter 1Z", "Dokter 2Z", "Dokter 3Z"],
                },
                {
                    name: "Spesialis Y",
                    dokter: ["Dokter 1Y", "Dokter 2Y", "Dokter 3Y"],
                },
                {
                    name: "Spesialis U",
                    dokter: ["Dokter 1Y", "Dokter 2Y", "Dokter 3Y"],
                },
                
            ],
        },
        {
            name: "RSUD Kabupaten Mappi",
            spesialis: [
                {
                    name: "Spesialis P",
                    dokter: ["Dokter 1P", "Dokter 2P", "Dokter 3P"],
                },
                {
                    name: "Spesialis Y",
                    dokter: ["Dokter 1Y", "Dokter 2Y", "Dokter 3Y"],
                },
                {
                    name: "Spesialis U",
                    dokter: ["Dokter 1Y", "Dokter 2Y", "Dokter 3Y"],
                },
               
            ],
        },
        {
            name: "RSUD Paniai",
            spesialis: [
                {
                    name: "Spesialis Q",
                    dokter: ["Dokter 1Q", "Dokter 2Q", "Dokter 3Q"],
                },
                {
                    name: "Spesialis Y",
                    dokter: ["Dokter 1Y", "Dokter 2Y", "Dokter 3Y"],
                },
                {
                    name: "Spesialis U",
                    dokter: ["Dokter 1Y", "Dokter 2Y", "Dokter 3Y"],
                },
               
            ],
        },
    ];

    const rumahSakitSelect = document.getElementById("rumahSakit");

    rumahSakitSelect.addEventListener("change", function () {
        const selectedHospital = rumahSakitSelect.value;
        const selectedHospitalData = dataRumahSakit.find(
            (hospital) => hospital.name === selectedHospital
        );

        // Populate Spesialis dropdown based on selected hospital
        spesialisSelect.innerHTML = '<option value="#">-- Select Specialist --</option>';
        selectedHospitalData.spesialis.forEach((spesialisData) => {
            const option = document.createElement("option");
            option.value = spesialisData.name;
            option.textContent = spesialisData.name;
            spesialisSelect.appendChild(option);
        });
    });

    spesialisSelect.addEventListener("change", function () {
        const selectedHospital = rumahSakitSelect.value;
        const selectedSpesialis = spesialisSelect.value;
        const selectedHospitalData = dataRumahSakit.find(
            (hospital) => hospital.name === selectedHospital
        );

        // Find selected spesialis data
        const selectedSpesialisData = selectedHospitalData.spesialis.find(
            (spesialisData) => spesialisData.name === selectedSpesialis
        );

        // Populate Dokter dropdown based on selected spesialis
        dokterSelect.innerHTML = '<option value="#">-- Select Doctor --</option>';
        selectedSpesialisData.dokter.forEach((dokterName) => {
            const option = document.createElement("option");
            option.value = dokterName;
            option.textContent = dokterName;
            dokterSelect.appendChild(option);
        });
    });

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const nomor = document.getElementById("nomor").value;
        const rumahSakit = document.getElementById("rumahSakit").value;
        const spesialis = document.getElementById("spesialis").value;
        const dokter = document.getElementById("dokter").value;
        const tanggal = document.getElementById("tanggal").value;
        const waktu = document.getElementById("waktu").value;
        const alamat = document.getElementById("alamat").value;

        const bookingData = {
            nama: nama,
            nomor: nomor,
            rumahSakit: rumahSakit,
            spesialis: spesialis,
            dokter: dokter,
            tanggal: tanggal,
            waktu: waktu,
            alamat: alamat,
        };

        // Menambahkan data hasil booking ke tabel
        const newRow = hasilTabel.insertRow();
        const cellNama = newRow.insertCell(0);
        const cellNomor = newRow.insertCell(1);
        const cellRumahSakit = newRow.insertCell(2);
        const cellSpesialis = newRow.insertCell(3);
        const cellDokter = newRow.insertCell(4);
        const cellTanggal = newRow.insertCell(5);
        const cellWaktu = newRow.insertCell(6);
        const cellAlamat = newRow.insertCell(7);

        cellNama.innerHTML = nama;
        cellNomor.innerHTML = nomor;
        cellRumahSakit.innerHTML = rumahSakit;
        cellSpesialis.innerHTML = spesialis;
        cellDokter.innerHTML = dokter;
        cellTanggal.innerHTML = tanggal;
        cellWaktu.innerHTML = waktu;
        cellAlamat.innerHTML = alamat;

        // Menampilkan tombol Download PDF
        downloadButton.style.display = "block";

        // Reset formulir
        bookingForm.reset();
    });

    downloadButton.addEventListener("click", function () {
        // Konversi elemen hasil booking menjadi PDF (seperti yang telah dijelaskan sebelumnya)
        const element = document.getElementById("hasilBooking");
        const pdfOptions = {
            margin: 10,
            filename: "booking_dokter.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: {
                unit: "mm",
                format: "a4",
                orientation: "landscape",
            },
        };
        html2pdf().from(element).set(pdfOptions).save();
    });
});