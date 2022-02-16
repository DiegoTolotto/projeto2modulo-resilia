'use strict';

const fillForm = (endereco) => {
    document.getElementById('inputAddress').value = endereco.logradouro;
    document.getElementById('inputAddressNeigh').value = endereco.bairro;
    document.getElementById('inputCity').value = endereco.localidade;
    document.getElementById('inputState').value = endereco.uf;

}

const limparFormulario = (endereco) => {
    document.getElementById('inputAddress').value = ''
    document.getElementById('inputAddressNeigh').value = ''
    document.getElementById('inputCity').value = ''
    document.getElementById('inputState').value = ''
}

const cepValido = (cep) => cep.length === 8 && eNumero(cep);

const eNumero = (num) =>/^[0-9]+$/.test(num)


const searchCep = async() => {
    limparFormulario()
    const cep = document.getElementById('inputCep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    if(cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
    
        if(endereco.hasOwnProperty('erro')){
            document.getElementById('inputAddress').value = `CEP não encontrado!`;
    
        }else{
            fillForm(endereco);
    
        }
    }else{
        document.getElementById('inputAddress').value = `CEP incorreto!`
    }

}

document.getElementById('inputCep').addEventListener('focusout', searchCep);