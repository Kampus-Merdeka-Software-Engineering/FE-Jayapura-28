document.addEventListener("DOMContentLoaded", function () {
    const messageForm = document.getElementById("message-form");
    const messagesContainer = document.getElementById("messages");
    const USER_STORAGE_KEY = "forum_user";
    const MESSAGES_STORAGE_KEY = "forum_messages";


  
    // Mengambil nama pengguna dari localStorage jika ada
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (savedUser) {
        document.getElementById("user").value = savedUser;
    }

    // Mengambil pesan dari localStorage jika ada
    const savedMessages = JSON.parse(localStorage.getItem(MESSAGES_STORAGE_KEY)) || [];

    savedMessages.forEach((message, index) => {
        const messageDiv = createMessage(message.user, message.content, index);
        messagesContainer.appendChild(messageDiv);
    });

    messageForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const user = document.getElementById("user").value;
        const content = document.getElementById("content").value;

        if (user.trim() === "" || content.trim() === "") {
            alert("Silakan isi nama pengguna dan pesan Anda.");
            return;
        }

        const message = createMessage(user, content, savedMessages.length);
        messagesContainer.appendChild(message);

        // Menyimpan pesan ke localStorage
        savedMessages.push({ user, content });
        localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(savedMessages));

        // Menyimpan nama pengguna ke localStorage
        localStorage.setItem(USER_STORAGE_KEY, user);

        document.getElementById("user").value = "";
        document.getElementById("content").value = "";
    });

    function createMessage(user, content, index) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");

        const userDiv = document.createElement("div");
        userDiv.classList.add("user");
        userDiv.textContent = user + ":";

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");
        contentDiv.textContent = content;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            editMessage(index, content);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Hapus";
        deleteButton.classList.add("delete"); // Menambahkan kelas "delete"
        deleteButton.addEventListener("click", () => {
            deleteMessage(index);
        });

        messageDiv.appendChild(userDiv);
        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(editButton);
        messageDiv.appendChild(deleteButton);

        return messageDiv;
    }

    function editMessage(index, content) {
        const newContent = prompt("Edit pesan:", content);
        if (newContent !== null) {
            savedMessages[index].content = newContent;
            localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(savedMessages));
            const messageDiv = document.querySelectorAll(".message")[index];
            messageDiv.querySelector(".content").textContent = newContent;
        }
    }

    function deleteMessage(index) {
        if (confirm("Apakah Anda yakin ingin menghapus pesan ini?")) {
            savedMessages.splice(index, 1);
            localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(savedMessages));
            const messageDiv = document.querySelectorAll(".message")[index];
            messageDiv.remove();
        }
    }

    // Menambahkan tindakan klik untuk tombol kembali
    const backButton = document.getElementById("back-button");
    backButton.addEventListener("click", function () {
        window.history.back();
    });

    const token = localStorage.getItem("token");

    if (!token) {
        // Pengguna belum login, alihkan ke halaman login
        alert("you are not logged in yet");
        window.location.href = "login.html#login";
    } else {
        // Validasi token di sini (gunakan fungsi yang sesuai)
        if (!isValidToken(token)) {
            // Token tidak valid, alihkan ke halaman login
            alert("Incorrect email or password");
            window.location.href = "login.html#login";
        }
        // Mengirimkan permintaan booking dengan token dalam header
        fetch("https://be-jayapura-28-production-10e1.up.railway.app/forum", {
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

});
