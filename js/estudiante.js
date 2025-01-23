document.getElementById("go-to-history").addEventListener("click", function () {
    window.location.href = "histo_clinico.html";
  });
  
  document.getElementById("logout").addEventListener("click", function () {
    if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
      window.location.href = "login.html";
    }
  });
  