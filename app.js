document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío por defecto

        // Obtener valores del formulario
        const nombre = contactForm.querySelector('input[type="text"]').value;
        const telefono = contactForm.querySelector('input[type="tel"]').value;
        const mensaje = contactForm.querySelector('textarea').value;

        // Validación básica
        if (!nombre || !telefono || !mensaje) {
            alert('Por favor, complete todos los campos');
            return;
        }

        // Ejemplo de envío (sustituir con método real de backend)
        const formData = {
            nombre: nombre,
            telefono: telefono,
            mensaje: mensaje
        };

        // Simular envío con fetch (requeriría backend real)
        try {
            // En un escenario real, reemplazar con tu endpoint
            fetch('/enviar-solicitud', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                alert('Solicitud enviada exitosamente');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un problema al enviar la solicitud');
            });
        } catch (error) {
            console.error('Error de envío:', error);
            alert('No se pudo enviar la solicitud');
        }
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});