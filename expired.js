window.addEventListener("DOMContentLoaded", () => {

  const promoCode = localStorage.getItem('promoCode');
  document.getElementById('promo-code').innerHTML = promoCode;

  //copiar al portapapeles
  document.querySelector(".copy-btn").addEventListener("click", (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(promoCode)
  });

  document.getElementById('reload').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = './step1.html';
  });
});