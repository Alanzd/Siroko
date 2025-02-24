window.addEventListener("DOMContentLoaded", () => {

  // Obtengo datos del localStorage
  const selectedYear = localStorage.getItem("selectedYear");
  const selectedOption = localStorage.getItem("selectedOption");

  function generatePromoCode(year, option) {
    const yearSum = parseInt(year[2]) + parseInt(year[3]);

    const filteredText = option
      .toUpperCase()
      // convierto a array de caracteres
      .split("")
      // filtro los caracteres: excluyo A, incluyo caracteres especiales
      .filter(char => /[B-Z0-9ÁÉÍÓÚÜÑ]/.test(char))
      // cojo solo los ultimos 4 caracteres
      .slice(-4)
      // los vuelvo a unir en una cadena
      .join("");


    // devuelvo un string con el código
    return `${yearSum}${filteredText}`;
  }

  // Generaro el código
  const promoCode = generatePromoCode(selectedYear, selectedOption);

  //copiar al portapapeles
  document.querySelector(".copy-btn").addEventListener("click", (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(promoCode)
  });

  //paso el codigo generado en el localStorage
  localStorage.setItem('promoCode', promoCode);

  // lo muestro como texto plano 
  document.getElementById("promo-code").textContent = promoCode;

  // cuenta atrás
  const countdownElement = document.getElementById("countdown");
  // obtengo los segundos de 20min
  let timeLeft = 20 * 60;

  function updateCountdown() {
    //obtengo los minutos
    const minutes = Math.floor(timeLeft / 60);

    // obtengo los segundos
    const seconds = timeLeft % 60;

    // si los segundos son menos de 10 añado un 0 delante
    countdownElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (timeLeft <= 0) {
      document.querySelector(".countdown").classList.add("hidden");
      document.querySelector(".expired").classList.remove("hidden");
    }

    // resto un segundo en cada vuelta
    timeLeft--;
  }
  //repito la funcion cada segundo
  const timer = setInterval(updateCountdown, 1000);


  document.getElementById('reload').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = './step1.html';
  });
});