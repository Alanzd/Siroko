window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('form-2').addEventListener('submit', function (event) {
    event.preventDefault();

    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
      localStorage.setItem('selectedOption', selectedOption.value);
      window.location.href = './code.html';
    }

  });
});