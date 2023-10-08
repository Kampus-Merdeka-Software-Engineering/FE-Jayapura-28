// login.js
const wrapper = document.querySelector(".wrapper"),
signupHeader = document.querySelector(".signup header"),
loginHeader = document.querySelector(".login header");


loginHeader.addEventListener("click", () => {
wrapper.classList.add("active");
});
signupHeader.addEventListener("click", () => {
wrapper.classList.remove("active");
});



const loginForm = document.getElementById("login-Form");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("https://be-jayapura-28-production-10e1.up.railway.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            const { token } = data.data;
            console.log(data);
            // Simpan token di local storage atau cookie untuk penggunaan berikutnya
            localStorage.setItem("token", token);

            message.innerText = data.message;
            window.location.href = "index.html";
            // Redirect atau tampilkan halaman beranda setelah login berhasil
        } else {
            message.innerText = data.message;
        }
    } catch (error) {
        console.error("Error:", error);
    }
});

  

// Register
const regisForm = document.getElementById("regisForm");
const message1 = document.getElementById("message1");

regisForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email1").value;
  const password = document.getElementById("password1").value;

  try {
    const response = await fetch("https://be-jayapura-28-production-10e1.up.railway.app/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, fullname }),
    });

    const data = await response.json();

    if (response.ok) {
      message1.innerText = data.message;
      window.location.href = "login.html#login-Form";
      // Redirect atau tampilkan halaman beranda setelah login berhasil
    } else {
      message1.innerText = data.message;
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

