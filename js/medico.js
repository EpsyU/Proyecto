function logout() {
    if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
        // Limpiamos los tokens o sesiones almacenadas
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        window.location.href = "index.html"; // Redirige al login
    }
}
