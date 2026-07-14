// Seleccionamos los elementos del HTML
const boton = document.getElementById("enviar");
const input = document.getElementById("pregunta");
const chat = document.getElementById("chat");

// Cuando el usuario hace clic en el botón
boton.addEventListener("click", enviarMensaje);

// También permite enviar con la tecla Enter
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        enviarMensaje();
    }
});

// Función principal
function enviarMensaje() {

    const texto = input.value.trim();

    // Si no escribió nada, no hace nada
    if (texto === "") return;

    // Crear mensaje del usuario
    const mensajeUsuario = document.createElement("div");
    mensajeUsuario.className = "mensaje usuario";

    mensajeUsuario.innerHTML = `
        <strong>👤 Tú</strong>
        <p>${texto}</p>
    `;

    chat.appendChild(mensajeUsuario);

    // Limpiar el cuadro de texto
    input.value = "";

    // Hacer scroll hacia abajo
    chat.scrollTop = chat.scrollHeight;

    // Esperar 1 segundo y responder
    setTimeout(respuestaEcoFenix, 1000);
}

function respuestaEcoFenix() {

    const mensajes = [

`<p>🌿 <strong>EcoTip:</strong> Apaga las luces cuando salgas de una habitación. Es un pequeño hábito que ayuda a reducir el consumo de energía.</p>`,

`<p>♻️ <strong>Dato curioso:</strong> Reciclar una tonelada de papel puede evitar la tala de aproximadamente 17 árboles.</p>`,

`<p>💧 <strong>Plan de acción:</strong> Esta semana intenta utilizar una botella reutilizable. Un pequeño cambio puede evitar el consumo de decenas de botellas plásticas al año.</p>`,

`<p>🌎 <strong>Motivación:</strong> No necesitas cambiar el mundo en un solo día. Cada acción sostenible que realizas inspira a otras personas.</p>`,

`<p>🌱 <strong>Reto ecológico:</strong> Hoy separa correctamente tus residuos y comparte este hábito con alguien de tu familia.</p>`

    ];

    const numero = Math.floor(Math.random() * mensajes.length);

    const respuesta = document.createElement("div");

    respuesta.className = "mensaje eco";

    respuesta.innerHTML = `
        <strong>🌱 Eco Fénix</strong>
        ${mensajes[numero]}
    `;

    chat.appendChild(respuesta);

    chat.scrollTop = chat.scrollHeight;

}