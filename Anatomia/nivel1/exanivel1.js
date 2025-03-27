const preguntasVF = [
    { 
        pregunta: "El sistema óseo está compuesto por 206 huesos en el cuerpo humano.", 
        respuesta: true, 
        explicacion: "El sistema óseo está compuesto por 206 huesos en el cuerpo humano." 
    },
    { 
        pregunta: "Los huesos redondos son un tipo de hueso reconocido en la clasificación anatómica.", 
        respuesta: false, 
        explicacion: "Los tipos principales son huesos largos, cortos, planos e irregulares. No existen los 'huesos redondos'." 
    },
    { 
        pregunta: "El sistema óseo produce hormonas como función principal.", 
        respuesta: false, 
        explicacion: "Sus funciones son sostén, protección, movimiento, producción de células sanguíneas y almacenamiento de minerales." 
    },
    { 
        pregunta: "El músculo cardíaco se encuentra exclusivamente en el corazón.", 
        respuesta: true, 
        explicacion: "El músculo cardíaco es un tipo de tejido muscular específico del corazón." 
    },
    { 
        pregunta: "Los músculos lisos son de control voluntario.", 
        respuesta: false, 
        explicacion: "Los músculos lisos (ej. órganos internos) son involuntarios. Los voluntarios son los esqueléticos." 
    },
    { 
        pregunta: "Una función del sistema muscular es la producción de calor.", 
        respuesta: true, 
        explicacion: "La contracción muscular genera calor, ayudando a mantener la temperatura corporal." 
    },
    { 
        pregunta: "El corazón está ubicado en el mediastino, entre los pulmones.", 
        respuesta: true, 
        explicacion: "El corazón se sitúa en el mediastino, con una ligera inclinación hacia el lado izquierdo." 
    },
    { 
        pregunta: "Los capilares transportan solo oxígeno.", 
        respuesta: false, 
        explicacion: "Los capilares intercambian gases (oxígeno y CO₂), nutrientes y desechos entre la sangre y las células." 
    },
    { 
        pregunta: "Las fosas nasales son la primera estructura por donde pasa el aire al respirar.", 
        respuesta: true, 
        explicacion: "El aire entra por las fosas nasales, donde se filtra, calienta y humedece." 
    },
    { 
        pregunta: "Durante la espiración, se expulsa aire rico en oxígeno.", 
        respuesta: false, 
        explicacion: "En la espiración se elimina aire con dióxido de carbono (CO₂)." 
    },
    { 
        pregunta: "El hígado produce bilis para digerir grasas.", 
        respuesta: true, 
        explicacion: "La bilis, producida por el hígado, emulsiona las grasas para su digestión." 
    },
    { 
        pregunta: "La primera etapa del proceso digestivo es la absorción.", 
        respuesta: false, 
        explicacion: "La primera etapa es la ingestión (introducción del alimento), seguida de digestión, absorción y eliminación." 
    },
    { 
        pregunta: "La anatomía humana estudia la estructura del cuerpo y sus partes.", 
        respuesta: true, 
        explicacion: "La anatomía se enfoca en la estructura, mientras la fisiología estudia las funciones." 
    },
    { 
        pregunta: "Los glóbulos blancos tienen como función principal transportar oxígeno.", 
        respuesta: false, 
        explicacion: "Los glóbulos rojos transportan oxígeno. Los blancos defienden el organismo contra infecciones." 
    },
    { 
        pregunta: "La laringe contiene las cuerdas vocales.", 
        respuesta: true, 
        explicacion: "La laringe es el órgano de la voz y aloja las cuerdas vocales." 
    },
    { 
        pregunta: "La faringe transporta alimento desde la boca al estómago.", 
        respuesta: false, 
        explicacion: "La faringe lo lleva hasta el esófago. El esófago lo conduce al estómago." 
    }
];

const preguntasSM = [
    {
        pregunta: "¿Cuál de los siguientes NO es un tipo de hueso?",
        opciones: ["Huesos largos", "Huesos cortos", "Huesos redondos", "Huesos planos"],
        respuesta: "Huesos redondos",
        explicacion: "Los tipos de huesos son: largos (como fémur), cortos (como carpo), planos (como cráneo) e irregulares (como vértebras). No existen los 'huesos redondos'."
    },
    {
        pregunta: "¿Qué función NO cumple el sistema óseo?",
        opciones: ["Sostén", "Protección", "Producción de hormonas", "Almacenamiento de minerales"],
        respuesta: "Producción de hormonas",
        explicacion: "Sus funciones incluyen sostén, protección, movimiento, producción de células sanguíneas y almacenamiento de minerales."
    },
    {
        pregunta: "¿Qué tipo de músculo se encuentra en el corazón?",
        opciones: ["Músculo liso", "Músculo esquelético", "Músculo cardiaco", "Músculo voluntario"],
        respuesta: "Músculo cardiaco",
        explicacion: "El músculo cardíaco es exclusivo del corazón y tiene contracciones rítmicas involuntarias."
    },
    {
        pregunta: "¿Cuál es una función básica del sistema muscular?",
        opciones: ["Digestión", "Respiración", "Producción de hormonas", "Producción de calor"],
        respuesta: "Producción de calor",
        explicacion: "La actividad muscular genera calor, ayudando a mantener la temperatura corporal."
    },
    {
        pregunta: "¿Dónde está ubicado el corazón?",
        opciones: ["En el tórax derecho", "En el mediastino", "En el abdomen", "Debajo de los pulmones"],
        respuesta: "En el mediastino",
        explicacion: "El corazón se sitúa en el mediastino (entre los pulmones), con ligera inclinación hacia la izquierda."
    },
    {
        pregunta: "¿Qué transportan los capilares?",
        opciones: ["Solo oxígeno", "Solo nutrientes", "Gases, nutrientes y desechos", "Solo sangre"],
        respuesta: "Gases, nutrientes y desechos",
        explicacion: "Los capilares permiten el intercambio de gases, nutrientes y desechos entre la sangre y los tejidos."
    },
    {
        pregunta: "¿Cuál es la primera estructura por donde pasa el aire al respirar?",
        opciones: ["Faringe", "Laringe", "Tráquea", "Fosas nasales"],
        respuesta: "Fosas nasales",
        explicacion: "El aire entra por las fosas nasales, donde se filtra, calienta y humedece."
    },
    {
        pregunta: "¿Qué ocurre durante la espiración?",
        opciones: ["Entra aire con oxígeno", "Se expulsa aire con dióxido de carbono", "Se calientan los pulmones", "Se contraen los bronquios"],
        respuesta: "Se expulsa aire con dióxido de carbono",
        explicacion: "En la espiración se elimina CO₂, producto de desecho del metabolismo celular."
    },
    {
        pregunta: "¿Qué órgano produce bilis?",
        opciones: ["Páncreas", "Estómago", "Hígado", "Intestino delgado"],
        respuesta: "Hígado",
        explicacion: "El hígado produce bilis, que se almacena en la vesícula biliar y emulsiona las grasas."
    },
    {
        pregunta: "¿Cuál es la primera etapa del proceso digestivo?",
        opciones: ["Digestión", "Absorción", "Ingestión", "Eliminación"],
        respuesta: "Ingestión",
        explicacion: "El proceso comienza con la ingestión (introducción del alimento por la boca)."
    },
    {
        pregunta: "¿Qué es la anatomía humana?",
        opciones: ["El estudio de las enfermedades", "El estudio de la estructura del cuerpo humano", "El estudio de los medicamentos", "El estudio de los tejidos"],
        respuesta: "El estudio de la estructura del cuerpo humano",
        explicacion: "La anatomía estudia la estructura, mientras la fisiología se enfoca en las funciones."
    },
    {
        pregunta: "¿Qué función cumplen los glóbulos blancos en la sangre?",
        opciones: ["Transportar oxígeno", "Regular la temperatura", "Defensa del organismo", "Bombear el corazón"],
        respuesta: "Defensa del organismo",
        explicacion: "Los leucocitos (glóbulos blancos) combaten infecciones y agentes patógenos."
    },
    {
        pregunta: "¿Qué tipo de músculos son involuntarios?",
        opciones: ["Músculos esqueléticos", "Músculos cardiacos", "Músculos lisos", "Todas las anteriores"],
        respuesta: "Músculos lisos",
        explicacion: "Los músculos lisos (ej. intestino) son involuntarios. Los esqueléticos son voluntarios."
    },
    {
        pregunta: "¿Qué órgano del sistema respiratorio contiene las cuerdas vocales?",
        opciones: ["Faringe", "Tráquea", "Laringe", "Bronquios"],
        respuesta: "Laringe",
        explicacion: "La laringe aloja las cuerdas vocales y participa en la producción de la voz."
    },
    {
        pregunta: "¿Qué estructura transporta el alimento desde la boca hacia el esófago?",
        opciones: ["Estómago", "Intestino", "Faringe", "Ano"],
        respuesta: "Faringe",
        explicacion: "La faringe conecta la boca con el esófago durante la deglución."
    }
];

const preguntasAbiertas = [
    {
        pregunta: "¿Cómo se llama el tejido óseo que tiene una estructura porosa?",
        respuesta: "Esponjoso",
        explicacion: "El tejido óseo esponjoso tiene una estructura porosa que facilita el intercambio de nutrientes dentro del hueso."
    },
    {
        pregunta: "¿Qué órgano interno produce células sanguíneas dentro de los huesos?",
        respuesta: "Médula",
        explicacion: "La médula ósea es el tejido blando ubicado en el interior de los huesos donde se generan los glóbulos rojos, blancos y plaquetas."
    },
    {
        pregunta: "¿Cómo se denomina el tipo de músculo presente en el corazón?",
        respuesta: "Cardiaco",
        explicacion: "El músculo cardiaco es exclusivo del corazón y realiza contracciones rítmicas involuntarias."
    },
    {
        pregunta: "¿Qué palabra describe el movimiento de contracción y relajación muscular?",
        respuesta: "Peristáltico",
        explicacion: "El movimiento peristáltico permite el transporte de sustancias a través de conductos como el esófago."
    },
    {
        pregunta: "¿Cómo se llama el conducto que transporta la sangre desde el corazón?",
        respuesta: "Arteria",
        explicacion: "Las arterias llevan sangre oxigenada desde el corazón hacia los tejidos del cuerpo."
    },
    {
        pregunta: "¿Cuál es el nombre del órgano central del sistema circulatorio?",
        respuesta: "Corazón",
        explicacion: "El corazón bombea sangre para transportar oxígeno y nutrientes a todo el organismo."
    },
    {
        pregunta: "¿Cómo se denomina el conducto que transporta el aire a los pulmones?",
        respuesta: "Tráquea",
        explicacion: "La tráquea conduce el aire desde la laringe hacia los bronquios y pulmones."
    },
    {
        pregunta: "¿Qué órgano realiza el intercambio gaseoso en el sistema respiratorio?",
        respuesta: "Pulmones",
        explicacion: "Los pulmones permiten el intercambio de oxígeno y dióxido de carbono con la sangre."
    },
    {
        pregunta: "¿Qué órgano produce enzimas para la digestión?",
        respuesta: "Páncreas",
        explicacion: "El páncreas secreta enzimas digestivas que descomponen los alimentos en nutrientes."
    },
    {
        pregunta: "¿Cómo se llama la primera parte del tubo digestivo?",
        respuesta: "Boca",
        explicacion: "La digestión comienza en la boca con la masticación y mezcla con saliva."
    },
    {
        pregunta: "¿Cuál es la ciencia que estudia la estructura del cuerpo humano?",
        respuesta: "Anatomía",
        explicacion: "La anatomía estudia la estructura del cuerpo y sus componentes."
    },
    {
        pregunta: "¿Cómo se denominan las células de defensa en la sangre?",
        respuesta: "Leucocitos",
        explicacion: "Los leucocitos (glóbulos blancos) protegen contra infecciones y enfermedades."
    },
    {
        pregunta: "¿Qué nombre recibe el proceso de entrada de aire a los pulmones?",
        respuesta: "Inspiración",
        explicacion: "Durante la inspiración, el aire rico en oxígeno entra a los pulmones."
    },
    {
        pregunta: "¿Cómo se llama el conducto que une la boca con el esófago?",
        respuesta: "Faringe",
        explicacion: "La faringe conecta la boca y la nariz con el esófago."
    },
    {
        pregunta: "¿Cuál es el término para el movimiento de descomposición de alimentos?",
        respuesta: "Digestión",
        explicacion: "La digestión transforma los alimentos en nutrientes absorbibles por el cuerpo."
    }
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
    
    if(notaFinal >= 18) {
        document.getElementById("mensaje-final").textContent = "¡Felicidades! Ya puedes pasar al nivel 2";
        document.getElementById("mensaje-final").style.color = "#2ecc71";
    } else {
        document.getElementById("mensaje-final").textContent = "Sigue practicando para alcanzar el nivel 2";
        document.getElementById("mensaje-final").style.color = "#e74c3c";
    }
}
