document.getElementById("historial-clinico-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
  
    if (nombre && edad) {
      alert("Historial clínico guardado correctamente.");
      // Aquí puedes enviar los datos a la API
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
  