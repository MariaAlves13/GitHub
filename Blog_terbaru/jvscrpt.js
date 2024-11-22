
  // Ambil elemen form dan input
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

// Fungsi validasi untuk setiap input
function validateName() {
  const nameError = document.getElementById("nameError");
  if (nameInput.value.trim().length < 5) {
    nameInput.classList.add("error");
    nameInput.classList.remove("success");
    nameError.textContent = "Nama harus memiliki minimal 5 karakter.";
  } else {
    nameInput.classList.add("success");
    nameInput.classList.remove("error");
    nameError.textContent = "";
  }
}

function validateEmail() {
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailInput.classList.add("error");
    emailInput.classList.remove("success");
    emailError.textContent = "Masukkan email yang valid.";
  } else {
    emailInput.classList.add("success");
    emailInput.classList.remove("error");
    emailError.textContent = "";
  }
}

function validatePhone() {
  const phoneError = document.getElementById("phoneError");
  const phonePattern = /^[0-9]{10,15}$/;
  if (!phonePattern.test(phoneInput.value.trim())) {
    phoneInput.classList.add("error");
    phoneInput.classList.remove("success");
    phoneError.textContent = "Nomor telepon harus berisi 10-15 angka.";
  } else {
    phoneInput.classList.add("success");
    phoneInput.classList.remove("error");
    phoneError.textContent = "";
  }
}

function validateMessage() {
  const messageError = document.getElementById("messageError");
  const messageValue = messageInput.value.trim(); // Gunakan trim untuk mengabaikan spasi kosong di awal/akhir

  if (messageValue.length < 15) {
    // Jika pesan kurang dari 15 karakter
    messageInput.classList.add("error");
    messageInput.classList.remove("success");
    messageError.textContent = "Pesan harus memiliki minimal 15 karakter.";
  } else {
    // Jika pesan valid
    messageInput.classList.add("success");
    messageInput.classList.remove("error");
    messageError.textContent = ""; // Hapus pesan error
  }
}


// Tambahkan event listener untuk validasi real-time
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
messageInput.addEventListener("input", validateMessage);


// Validasi saat form disubmit
form.addEventListener("submit", function (event) {
  // Prevent form submission jika ada error
  validateName();
  validateEmail();
  validatePhone();
  validateMessage();

  const errors = document.querySelectorAll(".error-message");
  let isValid = true;
  errors.forEach((error) => {
    if (error.textContent !== "") isValid = false;
  });

  if (!isValid) {
    event.preventDefault(); // Stop form submission jika ada error
    alert("Silahkan isi form dengan benar.");
  } else {
    alert("Form berhasil dikirim!");
  }
});


//Toggle dan responsive navigasi

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

