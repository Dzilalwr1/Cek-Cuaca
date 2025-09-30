console.log("Script Praktikum Dijalankan");

// Variabel untuk menangkap elemen dari HTML
const elNama = document.getElementById("nama-mhs");
const elNilai = document.getElementById("nilai-mhs");
const elStatus = document.getElementById("status-kelulusan");

// Mengambil input elemen
const inputNama = document.getElementById("input-nama");
const inputNilai = document.getElementById("input-nilai");

// Menangani klik tombol submit
document.getElementById("submit-btn").addEventListener("click", function () {
  // Mendapatkan nilai input dari pengguna
  const namaMahasiswa = inputNama.value;
  const nilaiMahasiswa = parseInt(inputNilai.value);
  let isLulus = false;
  let pesanStatus = "";

  // 1. Menampilkan Nama dan Nilai
  elNama.textContent = namaMahasiswa;
  console.log("Nama:", namaMahasiswa)
  elNilai.textContent = nilaiMahasiswa;
  console.log("Nilai:", nilaiMahasiswa)

  // 2. Logika Kelulusan (if...else)
  if (nilaiMahasiswa >= 75) {
    pesanStatus = "Selamat, Anda Dinyatakan LULUS!";
    isLulus = true;
  } else {
    pesanStatus = "Tetap Semangat, Anda HARUS Mengulang.";
    isLulus = false;
  }

  // 3. Menampilkan status kelulusan
  elStatus.textContent = pesanStatus;
  console.log(pesanStatus)

  // 4. Mengubah gaya berdasarkan status kelulusan
  if (isLulus === true) {
    elStatus.style.color = 'green';
    elStatus.style.fontWeight = 'bold';
  } else {
    elStatus.style.color = 'red';
    elStatus.style.fontWeight = 'bold';
  }
});
