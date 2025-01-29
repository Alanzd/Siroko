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

  // lo muestro como texto plano 
  document.getElementById("promo-code").textContent = promoCode;
