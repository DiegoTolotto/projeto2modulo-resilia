function checarEmail() {
    if (document.getElementsByClassName(msgemail).email.value == ""
        || document.getElementsByClassName(msgemail).email.value.indexOf('@') == -1
        || document.getElementsByClassName(msgemail).email.value.indexOf('.') == -1) {
        alert("Por favor, informe um E-MAIL válido!");
        return false;
    }
}

function emailEnviado() {
    let botao = document.querySelector("h1").innerText = "E-mail enviado com Sucesso!";
}