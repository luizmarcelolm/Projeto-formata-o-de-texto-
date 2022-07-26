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
    document.getElementById('texto').value = "";
}