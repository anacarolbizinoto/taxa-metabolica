function calcularBasal () {

      var idn = window.document.getElementById('nome').value;
      var peso = window.document.getElementById('txtpeso').value;
      var altura = window.document.getElementById('txtalt').value;
      var idade = window.document.getElementById('txtidade').value;
      var tmbF = 655 + (9.6 * peso) + (1,8 * altura) - (4.7 * idade)
      var tmbM = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade)
      var res = window.document.getElementById('resultado');

      const btn = document.querySelector('#btn');
      const output = document.querySelector('#output');
      const radioButtons = document.querySelectorAll('input[name="sexo"]');
      btn.addEventListener('click', () => {
            let sexoSelecionado;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    sexoSelecionado = radioButton.value;
                    console.log((sexoSelecionado == "femn"))
                    if(sexoSelecionado == "femn"){
                        output.innerText = `${idn}, sua taxa metabolica basal é de ${tmbF}`
                    } else if (sexoSelecionado == "masc"){
                        output.innerText = `${idn}, sua taxa metabolica basal é de ${tmbM}`
                    } else {
                        alert("erro ao selecionar o sexo");
                    }
                    break;
                }
            }
        })

        
}

function calcularTotal () {

        var basal = calcularBasal()
        var sedentario = window.document.getElementById('sed')
        var atividadeLigeira = window.document.getElementById('atvlig') 
        var atividadeModerada = window.document.getElementById('atvmod') 
        var atividadeIntensa = window.document.getElementById('atvint')
        var atividadeMuitoIntensa = window.document.getElementById('atvmt')
      
     
       if (sedentario) {
           basal * 1.2
           return sedentario 
       }
     
       if (atividadeLigeira) {
           basal * 1.375
           return atividadeLigeira;
       }
     
       if (atividadeModerada){
          basal * 1.55
          return atividadeModerada
       }
       
       if (atividadeIntensa) {
           basal * 1.725
           return atividadeIntensa
       }
     
       if (atividadeMuitoIntensa) {
           basal * 1.9
           return atividadeMuitoItensa
       }

}

function calcular () {
    calcularBasal();
    calcularTotal();
}