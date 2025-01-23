// Endpoint del backend para autenticación
const API_URL = 'https://tu-api-url.com/auth/login';

// Manejar el evento de envío del formulario
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Obtener datos del formulario
    const controlNumber = document.getElementById('controlNumber').value;
    const password = document.getElementById('password').value;

    try {
        // Enviar credenciales al servidor
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ controlNumber, password }),
        });

        const result = await response.json();

        if (response.ok) {
            // Guardar el token JWT en el almacenamiento local
            localStorage.setItem('token', result.token);

            // Redirigir al dashboard
            window.location.href = '/dashboard.html';
        } else {
            // Mostrar error
            showError(result.message || 'Error de autenticación');
        }
    } catch (error) {
        console.error('Error al autenticar:', error);
        showError('No se pudo conectar al servidor');
    }
});

// Función para mostrar mensajes de error
function showError(message) {
    const errorElement = document.getElementById('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Verificar si el usuario ya está autenticado
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (token) {
        // Redirigir automáticamente si el usuario ya está autenticado
        window.location.href = '/dashboard.html';
    }
});
