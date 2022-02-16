document.querySelector(".btn-lg").disabled = true;

function validarEmail() {
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');
    let senha = document.querySelector(".btn-lg");

    if (!email.checkValidity()) {
        error.innerHTML = "Email invalido";
    } else {
        document.querySelector(".btn-lg").disabled = false;
    }
}


function redefinirMsg() {
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Email invalido") {
        error.innerHTML = "";
    }
}

function emailEnviado() {
    let button = document.querySelector("h2").innerText = "E-mail enviado com Sucesso!";
}