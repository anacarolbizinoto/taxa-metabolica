function calcularBasal () {

      var idn = window.document.getElementById('nome').value();
      var peso = window.document.getElementById('txtpeso').value();
      var altura = window.document.getElementById('txtalt').value();
      var idade = window.document.getElementById('txtidade').value();

      var res = window.document.getElementById('resultado')


      const btn = document.querySelector('#btn');
      const radioButtons = document.querySelectorAll('input[name="sexo"]');
      
      btn.addEventListener("click"), () => {
            let sexoSelecionado;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    sexoSelecionado = radioButton.value;
                    console.log((sexoSelecionado == "F"))
                    if(sexoSelecionado == "F"){
                        var tmbM = 655 + (9,6 * peso) + (1,8 * altura) – (4,7 * idade)
                        res.innerHTML = `${idn}, sua taxa metabolica basal é de ${tmbH}`
                    } else if (sexoSelecionado == "M"){
                        var tmbH = 66 + (13,7 * peso) + (5 * altura) – (6,8 * idade)
                        res.innerHTML = `${idn}, sua taxa metabolica basal é de ${tmbH}`
                    } else {
                        alert("erro ao selecionar o sexo");
                    }
                    break;
                }
            }
        }
}


/*

function calcularTotal () {
   
   var basal = calcularBasal()
   var sedentario = window.document.getElementById('sed')
   var atividadeLigeira = window.document.getElementById('atvlig') 
   var atividadeModerada = window.document.getElementById('atvmod') 
   var atividadeIntensa = window.document.getElementById('atvint')
   var atividadeMuitoIntensa = window.document.getElementById('atvmt')
 

  if (var = sedentario) {
      var totalsed = basal * 1.2 
  }

  if (var = atividadeLigeira) {
      var totalbasal * 1.375
  }

  if (var = atividadeModerada){
     basal * 1.55
  }
  
  if (var = atividadeIntensa) {
      basal * 1.725
  }

  if (var = atividadeMuitoIntensa) {
      basal * 1.9
  }
}
