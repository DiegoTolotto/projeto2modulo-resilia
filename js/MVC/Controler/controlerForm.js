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