document.getElementById("menu-btn").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    // Verifica se o menu está visível, e alterna a visibilidade
    if (menu.style.display === "none") {
      menu.style.display = "block";  // Mostra o menu
    } else {
      menu.style.display = "none";  // Esconde o menu
    }
  });
  document.getElementById('btnReserva').addEventListener('click', function () {
    const formReserva = document.getElementById('formReserva');
    formReserva.classList.toggle('hidden'); // Mostra ou esconde o formulário
});
