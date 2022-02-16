document.querySelector(".btn-lg").disabled = true;

document.getElementById("email").addEventListener("input", function(event){

  
      var conteudo = document.getElementById("email").value;
  
      //valida conteudo do input 
      if (conteudo !== null && conteudo !== '') {
        //habilita o botão
        document.getElementById("btn-lg").disabled = false;
      } else {
        //desabilita o botão se o conteúdo do input ficar em branco
        document.getElementById("btn-lg").disabled = true;
      }
  });