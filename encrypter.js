function no_space_white1() {
    let blanco = document.getElementById("texto").value;

    if (blanco.length === 0) {
        alert("Texto vacío");
    } else if (blanco.replace(/\s/g, "").length === 0) {
        alert("Contiene espacios, texto vacío");
    }
}

function no_space_white2() {
    let blanco = document.getElementById("texto2").value;

    if (blanco.length === 0) {
        alert("Texto vacío");
    } else if (blanco.replace(/\s/g, "").length === 0) {
        alert("Contiene espacios, texto vacío");
    }
}

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
    var texto = document.getElementById("texto").value.trim();

    // Verificar si el texto está vacío después de eliminar los espacios en blanco
    if (texto === "") {
        return no_space_white1();
    }

    // Si hay texto, proceder con el cifrado
    var textoCifrado = texto.replace(/e/igm, "enter")
                             .replace(/i/igm, "imes")
                             .replace(/a/igm, "ai")
                             .replace(/o/igm, "ober")
                             .replace(/u/igm, "ufat");

    document.getElementById("texto2").rows = 15; // Establecer un número fijo de filas
    document.getElementById("texto2").value = textoCifrado;
    hiddenelementos();
    document.getElementById('copiar').style.visibility = 'visible';
    clean();
}

function desencriptar() {
    var texto = document.getElementById("texto").value.trim();

    // Verificar si el texto está vacío después de eliminar los espacios en blanco
    if (texto === "") {
        return no_space_white2();
    }

    var textoCifrado = texto.replace(/enter/igm, "e")
                             .replace(/imes/igm, "i")
                             .replace(/ai/igm, "a")
                             .replace(/ober/igm, "o")
                             .replace(/ufat/igm, "u");

    document.getElementById("texto2").rows = 15; // Establecer un número fijo de filas
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
    if (contenido.value.trim() === "") {
        return no_space_white2();
    }
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