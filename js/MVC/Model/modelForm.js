'use strict';

const fillForm = (endereco) => {
    document.getElementById('inputAddress').value = endereco.logradouro;
    document.getElementById('inputAddressNeigh').value = endereco.bairro;
    document.getElementById('inputCity').value = endereco.localidade;
    document.getElementById('inputState').value = endereco.uf;

}