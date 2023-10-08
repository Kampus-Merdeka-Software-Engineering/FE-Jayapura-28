//artikel.js

// Fungsi untuk mengambil artikel dari backend
async function getArticleById(id) {
    try {
        const response = await fetch(`https://be-jayapura-28-production-10e1.up.railway.app/article/${id}`); // Ganti URL dengan endpoint backend yang sesuai
        if (!response.ok) {
            throw new Error(`Failed to fetch article with id ${id}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Fungsi untuk menampilkan artikel dalam kontainer 1
async function displayArticle1() {
    const articleId = "3"; // Ganti dengan ID artikel yang ingin Anda tampilkan
    try {
        const article = await getArticleById(articleId);

        // Gantilah elemen HTML di bawah sesuai dengan kontainer yang ingin Anda gunakan
        const artikel = document.getElementById("container1");
        const title = document.getElementById("judul1");
        const konten = document.getElementById("konten1");
        const url = document.getElementById("url1");

        // Menampilkan data dari database artikel
        title.textContent = article.judul_artikel;
        konten.textContent = article.konten_artikel;
        url.href = article.url;

        // Mengatur atribut target untuk membuka tautan dalam tab/jendela baru
        url.target = "_blank";

        artikel.appendChild(title);
        artikel.appendChild(konten);
        artikel.appendChild(url);
    } catch (error) {
        // Handle error (misalnya, menampilkan pesan kesalahan ke pengguna)
        console.error(error);
    }
}

// Fungsi untuk menampilkan artikel dalam kontainer 2
async function displayArticle2() {
    const articleId = "1"; // Ganti dengan ID artikel yang ingin Anda tampilkan
    try {
        const article = await getArticleById(articleId);

        // Gantilah elemen HTML di bawah sesuai dengan kontainer yang ingin Anda gunakan
        const artikel = document.getElementById("container2");
        const title = document.getElementById("judul2");
        const konten = document.getElementById("konten2");
        const url = document.getElementById("url2");

        // Menampilkan data dari database artikel
        title.textContent = article.judul_artikel;
        konten.textContent = article.konten_artikel;
        url.href = article.url;

        // Mengatur atribut target untuk membuka tautan dalam tab/jendela baru
        url.target = "_blank";

        artikel.appendChild(title);
        artikel.appendChild(konten);
        artikel.appendChild(url);
    } catch (error) {
        // Handle error (misalnya, menampilkan pesan kesalahan ke pengguna)
        console.error(error);
    }
}

// Fungsi untuk menampilkan artikel dalam kontainer 3
async function displayArticle3() {
    const articleId = "2"; // Ganti dengan ID artikel yang ingin Anda tampilkan
    try {
        const article = await getArticleById(articleId);

        // Gantilah elemen HTML di bawah sesuai dengan kontainer yang ingin Anda gunakan
        const artikel = document.getElementById("container3");
        const title = document.getElementById("judul3");
        const konten = document.getElementById("konten3");
        const url = document.getElementById("url3");

        // Menampilkan data dari database artikel
        title.textContent = article.judul_artikel;
        konten.textContent = article.konten_artikel;
        url.href = article.url;

        // Mengatur atribut target untuk membuka tautan dalam tab/jendela baru
        url.target = "_blank";

        artikel.appendChild(title);
        artikel.appendChild(konten);
        artikel.appendChild(url);
    } catch (error) {
        // Handle error (misalnya, menampilkan pesan kesalahan ke pengguna)
        console.error(error);
    }
}

// Panggil fungsi untuk menampilkan artikel saat dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    displayArticle1();
    displayArticle2();
    displayArticle3();
});