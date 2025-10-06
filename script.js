// Simulasi data cuaca (data dummy)
const weatherData = {
  "Jakarta": { temperature: 30, condition: "Cerah" },
  "Bandung": { temperature: 25, condition: "Hujan Ringan" },
  "Surabaya": { temperature: 33, condition: "Panas Terik" },
  "Samarinda": { temperature: 28, condition: "Mendung" },
  "Balikpapan": { temperature: 27, condition: "Berawan" }
};

// Ambil elemen dari HTML
const inputCity = document.getElementById("cityInput");
const btnShow = document.getElementById("showWeatherBtn");
const resultDiv = document.getElementById("weatherResult");

// Event ketika tombol diklik
btnShow.addEventListener("click", function() {
  const city = inputCity.value.trim();
  
  if (city === "") {
    resultDiv.textContent = "Masukkan nama kota terlebih dahulu!";
    console.log("Tidak ada input kota.");
    return;
  }

  const weather = weatherData[city];

  if (weather) {
    const { temperature, condition } = weather;
    resultDiv.innerHTML = `
      <strong>Cuaca di ${city}:</strong><br>
      Suhu: ${temperature}°C<br>
      Kondisi: ${condition}
    `;

    console.log(`Cuaca di ${city}:`);
    console.log(`Suhu: ${temperature}°C`);
    console.log(`Kondisi: ${condition}`);
  } else {
    resultDiv.textContent = `Data cuaca untuk kota "${city}" tidak ditemukan.`;
    console.log(`Data kota "${city}" tidak ditemukan.`);
  }
});
