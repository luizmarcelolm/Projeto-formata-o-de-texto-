var text = document.getElementById('texto')
var result = document.getElementById('resultado')



function texto_maiuscula() {
    if (text.value.length == 0) {
        alert("DIGITE OU COLE SEU TEXTO PRIMEIRO!!!")
    }
    result.innerText = text.value.toUpperCase()
}

function texto_minuscula() {
    if (text.value.length == 0) {
        alert("DIGITE OU COLE SEU TEXTO PRIMEIRO!!!")
    }
    result.innerText = text.value.toLowerCase()
}

function limpa() {
    if (text.value.length == 0) {
        alert("CAIXA DE TEXTO VAZIA!!!")
    }
    document.getElementById("texto").value = "";
    result.innerText = text.value = "";
}

function copiar() {
    if (text.value.length == 0) {
        alert("NÃO TEM TEXTO PARA SER COPIADO!!!")
    }
    let textoCopiado = document.getElementById("resultado");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function capitalizeFirstLetter(string) {
    return string.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

function pm() {
    if (text.value.length == 0) {
        alert("DIGITE OU COLE SEU TEXTO PRIMEIRO!!!")
    }
    result.innerText = capitalizeFirstLetter(texto.value);
}