const preguntasVF = [
    
        { 
            pregunta:"El sistema óseo está compuesto por 206 huesos en el cuerpo humano.", 
            respuesta:true, 
            explicacion:"El sistema óseo está compuesto por 206 huesos en el cuerpo humano." 
        },
        { 
            pregunta: "El corazón se encuentra ubicado en el abdomen.", 
            respuesta: false, 
            explicacion: "El corazón está ubicado en el tórax, ligeramente inclinado hacia el lado izquierdo." 
        },
        { 
            pregunta: "La tibia es el hueso más largo del cuerpo humano.", 
            respuesta: false, 
            explicacion: "El hueso más largo del cuerpo humano es el fémur, no la tibia." 
        },
        { 
            pregunta: "El diafragma separa la cavidad torácica de la abdominal.", 
            respuesta: true, 
            explicacion: "El diafragma es un músculo que separa ambas cavidades y cumple un papel importante en la respiración." 
        },
        { 
            pregunta: "El encéfalo está protegido por la columna vertebral.", 
            respuesta: false, 
            explicacion: "El encéfalo está protegido por el cráneo, mientras que la columna vertebral protege la médula espinal." 
        },
        { 
            pregunta: "El hígado es el órgano más grande del cuerpo humano.", 
            respuesta: true, 
            explicacion: "El hígado es el órgano interno más grande del cuerpo humano, desempeñando funciones vitales en el metabolismo." 
        },
        { 
            pregunta: "La sangre transporta oxígeno y nutrientes a las células del cuerpo.", 
            respuesta: true, 
            explicacion: "La sangre se encarga de distribuir oxígeno y nutrientes a las células del organismo." 
        },
        { 
            pregunta: "El esqueleto axial está formado por las extremidades del cuerpo humano.", 
            respuesta: false, 
            explicacion: "El esqueleto axial está compuesto por el cráneo, la columna vertebral, las costillas y el esternón; las extremidades forman parte del esqueleto apendicular." 
        },
        { 
            pregunta: "Los glóbulos blancos se encargan de transportar oxígeno en la sangre.", 
            respuesta: false, 
            explicacion: "Los glóbulos rojos son los encargados de transportar oxígeno, mientras que los glóbulos blancos defienden el organismo contra infecciones." 
        },
        { 
            pregunta: "El páncreas produce insulina para regular el nivel de glucosa en sangre.", 
            respuesta: true, 
            explicacion: "El páncreas produce insulina, una hormona que regula los niveles de glucosa en la sangre." 
        }
    
    
];

const preguntasSM = [
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        opciones: ["Marte", "Júpiter", "Saturno"],
        respuesta: "Júpiter",
        explicacion: "Júpiter es el planeta más grande del sistema solar."
    },
    {
        pregunta: "¿Cuántos continentes hay en el mundo?",
        opciones: ["5", "6", "7"],
        respuesta: "7",
        explicacion: "Existen 7 continentes: Asia, África, América del Norte, América del Sur, Antártida, Europa y Oceanía."
    }
];

const preguntasAbiertas = [
    { pregunta: "Menciona un invento de Thomas Edison.", respuesta: "bombilla", explicacion: "Thomas Edison inventó la bombilla." },
    { pregunta: "¿En qué año llegó el hombre a la Luna?", respuesta: "1969", explicacion: "El hombre llegó a la Luna en 1969." }
];

window.onload = function () {
    mostrarPreguntas();
    document.querySelector("button").disabled = true;
};

function mostrarPreguntas() {
    const contVF = document.getElementById("preguntas-vf");
    const contSM = document.getElementById("preguntas-sm");
    const contAbiertas = document.getElementById("preguntas-abiertas");

    preguntasVF.forEach((preg, index) => {
        contVF.innerHTML += `
            <p>${preg.pregunta}</p>
            <label><input type="radio" name="vf-${index}" value="true"> Verdadero</label>
            <label><input type="radio" name="vf-${index}" value="false"> Falso</label>
            <p id="exp-vf-${index}" class="explicacion"></p>
        `;
    });

    preguntasSM.forEach((preg, index) => {
        let opcionesHTML = preg.opciones.map(opc =>
            `<label><input type="radio" name="sm-${index}" value="${opc}"> ${opc}</label>`
        ).join('');
        contSM.innerHTML += `
            <p>${preg.pregunta}</p>
            ${opcionesHTML}
            <p id="exp-sm-${index}" class="explicacion"></p>
        `;
    });

    preguntasAbiertas.forEach((preg, index) => {
        contAbiertas.innerHTML += `
            <p>${preg.pregunta}</p>
            <input type="text" id="abierta-${index}">
            <p id="exp-abierta-${index}" class="explicacion"></p>
        `;
    });

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("change", verificarCamposCompletos);
    });
}

function verificarCamposCompletos() {
    const totalCampos = document.querySelectorAll("input").length;
    const camposCompletos = Array.from(document.querySelectorAll("input")).filter(input => input.checked || input.value.trim()).length;
    document.querySelector("button").disabled = totalCampos !== camposCompletos;
}

function evaluarExamen() {
    let correctas = 0;
    let incorrectas = 0;
    const totalPreguntas = preguntasVF.length + preguntasSM.length + preguntasAbiertas.length;

    preguntasVF.forEach((preg, index) => {
        const respuestaUsuario = document.querySelector(`input[name='vf-${index}']:checked`);
        const expElem = document.getElementById(`exp-vf-${index}`);
        if (respuestaUsuario && respuestaUsuario.value === String(preg.respuesta)) {
            correctas++;
            expElem.textContent = "✅ Correcto";
        } else {
            incorrectas++;
            expElem.textContent = `❌ Incorrecto - ${preg.explicacion}`;
        }
    });

    preguntasSM.forEach((preg, index) => {
        const respuestaUsuario = document.querySelector(`input[name='sm-${index}']:checked`);
        const expElem = document.getElementById(`exp-sm-${index}`);
        if (respuestaUsuario && respuestaUsuario.value === preg.respuesta) {
            correctas++;
            expElem.textContent = "✅ Correcto";
        } else {
            incorrectas++;
            expElem.textContent = `❌ Incorrecto - ${preg.explicacion}`;
        }
    });

    preguntasAbiertas.forEach((preg, index) => {
        const respuestaUsuario = document.getElementById(`abierta-${index}`).value.trim().toLowerCase();
        const expElem = document.getElementById(`exp-abierta-${index}`);
        if (respuestaUsuario === preg.respuesta.toLowerCase()) {
            correctas++;
            expElem.textContent = "✅ Correcto";
        } else {
            incorrectas++;
            expElem.textContent = `❌ Incorrecto - ${preg.explicacion}`;
        }
    });

    const notaFinal = Math.round((correctas / totalPreguntas) * 20);

    document.getElementById("correctas").textContent = correctas;
    document.getElementById("incorrectas").textContent = incorrectas;
    document.getElementById("nota-final").textContent = `Nota Final: ${notaFinal}/20`;
}
