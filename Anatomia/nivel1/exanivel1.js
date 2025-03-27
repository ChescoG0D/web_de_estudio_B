// Función para preguntas de Verdadero/Falso
function verificarRespuesta(idPregunta, respuestaCorrecta) {
    const respuestaUsuario = document.getElementById(idPregunta).value.trim().toUpperCase();
    const resultado = document.getElementById(`resultado${idPregunta.replace('pregunta', '')}`);
    
    if (respuestaUsuario === "V" || respuestaUsuario === "F") {
        if (respuestaUsuario === respuestaCorrecta) {
            resultado.textContent = "✅ Respuesta correcta.";
            resultado.style.color = "green";
        } else {
            resultado.textContent = "❌ Respuesta incorrecta. Intenta nuevamente.";
            resultado.style.color = "red";
        }
    } else {
        resultado.textContent = "⚠️ Ingresa solo 'V' o 'F'.";
        resultado.style.color = "orange";
    }
}

function verificarAbierta(idPregunta) {
    const inputPregunta = document.getElementById(idPregunta);

    if (!inputPregunta) {
        console.error(`❌ No se encontró el elemento con ID: ${idPregunta}`);
        return;
    }

    const respuestaUsuario = inputPregunta.value.trim().toUpperCase();
    const resultado = document.getElementById(`vfres${idPregunta.substring(5)}`);
    
    if (!resultado) {
        console.error(`❌ No se encontró el elemento con ID: vfres${idPregunta.substring(5)}`);
        return;
    }

    if (respuestaUsuario === '') {
        resultado.textContent = "❌ Por favor, ingresa una respuesta.";
        resultado.style.color = "red";
        return;
    }

    // Obtener la respuesta correcta desde el atributo data-respuesta
    const respuestasValidas = inputPregunta.getAttribute('data-respuesta')
        .toUpperCase() // Convertir a mayúsculas para que no haya errores por capitalización
        .split(', ')    // Separar las respuestas en caso de que haya varias opciones

    // Verifica si alguna palabra clave está incluida en el texto del usuario
    const respuestaCorrectaEncontrada = respuestasValidas.some(respuesta =>
        respuestaUsuario.includes(respuesta)
    );

    if (respuestaCorrectaEncontrada) {
        resultado.textContent = "✅ Respuesta correcta.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "❌ Respuesta incorrecta. Intenta nuevamente.";
        resultado.style.color = "red";
    }
}

function verificarSeleccion(idPregunta, respuestaCorrecta) {
    const opciones = document.querySelectorAll(`#${idPregunta} input[type="radio"]:checked`);
    const resultado = document.getElementById(`selecres${idPregunta.substring(8)}`);

    if (opciones.length === 0) {
        resultado.textContent = "❌ Por favor, selecciona una opción.";
        resultado.style.color = "red";
        return;
    }

    const respuestaUsuario = opciones[0].value;

    if (respuestaUsuario === respuestaCorrecta) {
        resultado.textContent = "✅ Respuesta correcta.";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "❌ Respuesta incorrecta. Intenta nuevamente.";
        resultado.style.color = "red";
    }
}
