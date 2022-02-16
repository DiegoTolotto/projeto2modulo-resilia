
const limparFormulario = (endereco) => {
    document.getElementById('inputAddress').value = ''
    document.getElementById('inputAddressNeigh').value = ''
    document.getElementById('inputCity').value = ''
    document.getElementById('inputState').value = ''
}

document.getElementById('inputCep').addEventListener('focusout', searchCep);