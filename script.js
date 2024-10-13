//*!--------------- Animar Texto Subtitulo ---------------*//
document.addEventListener('DOMContentLoaded', function() {
const texto = ["Desarrollador Web Front-End."];
let index = 0;  // Índice de la frase actual
let letraIndex = 0;  // Índice de la letra actual
let currentText = '';  // Texto actual a mostrar
let isDeleting = false;  // Para controlar cuando borrar el texto

function type() {
  // Obtener la frase actual
  const fullText = texto[index];

  // Si está borrando, eliminar letras
  if (isDeleting) {
    currentText = fullText.substring(0, currentText.length - 1);
  } else {
    // Si está escribiendo, añadir letras
    currentText = fullText.substring(0, currentText.length + 1);
  }

  // Mostrar el texto en el span con la clase presentacion__subtitulo
  const subtitleElement = document.querySelector('.presentacion__sub-animado');
  if (subtitleElement) {
    subtitleElement.textContent = currentText;
  }

  // Si ha terminado de escribir y no está borrando
  if (!isDeleting && currentText === fullText) {
    // Pausa antes de empezar a borrar
    isDeleting = true;
    setTimeout(type, 3000);  // Pausa de 3 segundos
  } else if (isDeleting && currentText === '') {
    // Si ha terminado de borrar, pasa a la siguiente frase
    isDeleting = false;
    index = (index + 1) % texto.length;  // Mover al siguiente texto
    setTimeout(type, 1000);  // Pausa antes de escribir la siguiente frase
  } else {
    // Continuar escribiendo o borrando
    const velocidad = isDeleting ? 50 : 100;  // Velocidad al escribir/borrar
    setTimeout(type, velocidad);
  }
}
type(); // Iniciar la animación
});

//*!--------------- scroll up & Top Button ---------------*//
const topButton = document.querySelector(".top__button");
// El botón de subir se muestra y se oculta con el scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      topButton.classList.add("active");
    } else {
      topButton.classList.remove("active");
    }
  });
  // Acción de subir al inicio
topButton.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

//*!--------------- Scroll suave para los enlaces de navegación ---------------*//
const navLinks = document.querySelectorAll('.navegacion__lista a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
            behavior: 'smooth'
        });
      }  
    });
});

//*!--------------- Validación simple del formulario de contacto ---------------*//
// const form = document.querySelector('.contacto__formulario');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     const nombre = form.querySelector('input[placeholder="Nombre"]').value;
//     const correo = form.querySelector('input[placeholder="Correo Electrónico"]').value;
//     const asunto = form.querySelector('input[placeholder="Asunto"]').value;
//     const mensaje = form.querySelector('textarea[placeholder="Mensaje"]').value;

//     if (nombre === '' || correo === '' || asunto === '' || mensaje === '') {
//         Swal.fire({
//           title: '¡Lo siento!',
//           text: 'Por favor, completa todos los campos.',
//           icon: 'warning', 
//           confirmButtonText: 'Aceptar',
//           confirmButtonColor: 'LightSeaGreen',
//         });
//     } else {
//         // Crea un objeto con los datos del formulario
//         const formData = {
//             nombre: nombre,
//             correo: correo,
//             asunto: asunto,
//             mensaje: mensaje
//         };

//         // Envía los datos al servidor usando fetch
//         fetch('/ruta-al-servidor', { // Asegúrate de cambiar '/ruta-al-servidor' por tu URL real
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         })
//         .then(response => response.json())
//         .then(data => {
//             Swal.fire({
//               title: '¡Hola!',
//               text: 'Mensaje enviado con éxito.',
//               icon: 'success', 
//               confirmButtonText: 'Aceptar',
//               confirmButtonColor: 'LightSeaGreen',
//             });
//             form.reset();
//         })
//         .catch(error => {
//             Swal.fire({
//               title: 'Error',
//               text: 'Hubo un problema al enviar el mensaje. Intenta de nuevo más tarde.',
//               icon: 'error',
//               confirmButtonText: 'Aceptar',
//               confirmButtonColor: 'LightSeaGreen',
//             });
//             console.error('Error al enviar el formulario:', error);
//         });
//     }
// });


