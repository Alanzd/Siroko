window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('form-1').addEventListener('submit', function (event) {
    event.preventDefault();

    const selectedYear = document.querySelector('input[name="year"]:checked');
    if (selectedYear) {
      localStorage.setItem('selectedYear', selectedYear.value);
      window.location.href = './step2.html';
    }

  });
});

