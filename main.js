const ata = document.getElementById("main2a");
const tikla = document.getElementById("main3a");

//console.log(sehirUlke);
tikla.addEventListener("click", () => {
  //console.log("tiklandi");
  const sehirgetir = ata.value;
  getSehir(sehirgetir);
});
function getSehir(name) {
  const API = "3f4cc165681f66cc57f4c75643c19e70";
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;

  // console.log(fetch(baseURL))

  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      const {
        name,
        sys: { country },
        main: { temp, feels_like, humidity },
        weather: [{ description }],
        wind: { speed },
      } = data;

      // Verileri HTML elemanlarına atama
      const sehirUlke = document.getElementById("main5a");
      const sicaklik = document.getElementById("main6a");
      const nem = document.getElementById("main7a");
      const ruzgar = document.getElementById("main7b");
      const havadurumu = document.getElementById("main8a");
      const hissedilen = document.getElementById("main9a");

      sehirUlke.textContent = `${name}, ${country}`;
      sicaklik.textContent = `${temp}`;
      nem.textContent = `Nem:% ${humidity}`;
      ruzgar.textContent = `Rüzgar: ${speed} km/s`;
      havadurumu.textContent = `${description}`;
      hissedilen.textContent = `Hissedilen:${feels_like}°`;
      ata.value = "";
      ata.focus();
    })
    .catch((err) => console.error(err));
}
