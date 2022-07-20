let letras = [];
let resposta = 'abacaxi';

const respostaString = resposta.split("");


let match = [];
let vidas = 6;


for (let size = 0; size < respostaString.length; size++) {
  match[size]='-'
}
class Forca {
  chutar(letra) { 
    let pontua = 0;
    if(!letras.includes(letra)) {
      letras.push(letra);
      for (let index = 0; index < respostaString.length; index++) {
        if (respostaString[index] == letra) {
          match[index]=letra;
          pontua++;
        }
      console.log(match);
    }
    if (pontua <1) {
      vidas--;
    }  
    
    }
    

  }



  buscarEstado() { 
    
    // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
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