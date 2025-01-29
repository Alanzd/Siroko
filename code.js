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
      .filter(char => /[B-Z0-ÁÉÍÓÚÜÑ]/.test(char))
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
  document.querySelector(".copy-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(promoCode)
  });

  //paso el codigo generado en el localStorage
  localStorage.setItem('promoCode', promoCode);

  // lo muestro como texto plano 
  document.getElementById("promo-code").textContent = promoCode;

  // cuenta atrás
  const countdownElement = document.getElementById("countdown");
  // obtengo los segundos de 20min
  let timeLeft = 1 * 60;

  function updateCountdown() {
    //obtengo los minutos
    const minutes = Math.floor(timeLeft / 60);

    // obtengo los segundos
    const seconds = timeLeft % 60;

    countdownElement.innerHTML = `${minutes}:${seconds}`;

    if (timeLeft <= 0) {
      window.location.href = './expired.html';
    }

    // resto un segundo en cada vuelta
    timeLeft--;
  }
  //repito la funcion cada segundo
  const timer = setInterval(updateCountdown, 1000);


});