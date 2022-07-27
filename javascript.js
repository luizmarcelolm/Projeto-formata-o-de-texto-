//variável recebendo texto
var text = document.getElementById('texto')
var result = document.getElementById('resultado')


//função para transformar texto em maiúscula
function texto_maiuscula() {
    if (text.value.length == 0) {
        alert("DIGITE OU COLE SEU TEXTO PRIMEIRO!!!")
    }
    result.innerText = text.value.toUpperCase()
}

//função para transformar texto em minúscula
function texto_minuscula() {
    if (text.value.length == 0) {
        alert("DIGITE OU COLE SEU TEXTO PRIMEIRO!!!")
    }
    result.innerText = text.value.toLowerCase()
}
//função para limpar caixa de texto
function limpar() {
    if (text.value.length == 0) {
        alert("CAIXA DE TEXTO VAZIA!!!")
    }
    document.getElementById("texto").value = "";
    result.innerText = text.value = "";
}

//função para copiar texto
function copiar() {
    if (text.value.length == 0) {
        alert("NÃO TEM TEXTO PARA SER COPIADO!!!")
    }
    let textoCopiado = document.getElementById("resultado");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//função para transformar primeira letra em maiúscula
function capitalizeFirstLetter(string) {
    return string.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}


//função para transformar primeira letra do texto em maiúscula
function pm() {
    if (text.value.length == 0) {
        alert("DIGITE OU COLE SEU TEXTO PRIMEIRO!!!")
    }
    result.innerText = capitalizeFirstLetter(texto.value);
}