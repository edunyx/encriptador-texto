function btn_inicial_oculto() {
    document.getElementById('copiar').style.visibility = 'hidden';
}

function clean() {
    document.getElementById("texto").value = '';
    ajustarAltura(document.getElementById("texto")); // Ajusta la altura al limpiar
}

function ajustarAltura(textarea) {
    textarea.style.height = 'auto'; // Resetea la altura
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajusta la altura
}

// Llama a la función ajustarAltura cuando se ingresa texto
document.getElementById("texto").addEventListener("input", function() {
    ajustarAltura(this);
});

document.getElementById("texto2").addEventListener("input", function() {
    ajustarAltura(this);
});

function encriptar() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var textoCifrado = texto.replace(/e/igm, "enter");
    textoCifrado = textoCifrado.replace(/i/igm, "imes");
    textoCifrado = textoCifrado.replace(/a/igm, "ai");
    textoCifrado = textoCifrado.replace(/o/igm, "ober");
    textoCifrado = textoCifrado.replace(/u/igm, "ufat");

    document.getElementById("texto2").value = textoCifrado;
    hiddenelementos();
    document.getElementById('copiar').style.visibility = 'visible';
    clean();
}

function desencriptar() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var textoCifrado = texto.replace(/enter/igm, "e");
    textoCifrado = textoCifrado.replace(/imes/igm, "i");
    textoCifrado = textoCifrado.replace(/ai/igm, "a");
    textoCifrado = textoCifrado.replace(/ober/igm, "o");
    textoCifrado = textoCifrado.replace(/ufat/igm, "u");

    document.getElementById("texto2").value = textoCifrado;
    hiddenelementos();
    document.getElementById('copiar').style.visibility = 'visible';
}

function hiddenelementos() {
    document.getElementById('img').style.display = 'none';
    document.getElementById('txt1').style.display = 'none';
    document.getElementById('txt2').style.display = 'none';
}

function copiar() {
    var contenido = document.getElementById("texto2");
    contenido.select();
    contenido.setSelectionRange(0, 99999); // Para dispositivos móviles
    navigator.clipboard.writeText(contenido.value)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

btn_inicial_oculto();