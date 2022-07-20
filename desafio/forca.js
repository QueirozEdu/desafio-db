let letras = [];
let resposta = 'abacaxi';

const respostaString = resposta.split("");


let match = [];
let vidas = 6;

let ganha = [];

for (let index = 0; index < respostaString.length; index++) {
  ganha.push('x');
}


for (let size = 0; size < respostaString.length; size++) {
  match[size]='_'
}
class Forca {
  chutar(letra) { 
    if (letra.match(/^\w{1}$/)) {    
      let pontua = 0;
      if(!letras.includes(letra)) {
        letras.push(letra);
        for (let index = 0; index < respostaString.length; index++) {
          if (respostaString[index] == letra) {
            match[index]=letra;
            pontua++;
          }
      }
      if (pontua <1) {
        vidas--;
      }  
      
      }
    

  }

  }

  buscarEstado() { 
    //Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
      if (JSON.stringify(match) == JSON.stringify(respostaString)){
        return "ganhou"
       }
       else if (vidas <= 0) {
              return "perdeu";
       }
       else {
         return "aguardando chute";
       }
  }

  buscarDadosDoJogo() {

    return {
          
          letrasChutadas: letras, // Deve conter todas as letras chutadas
          vidas: vidas, // Quantidade de vidas restantes
          palavra: match // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }

 

}

module.exports = Forca;