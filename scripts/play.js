//Declarando as variáveis dos elementos que irão ser utilizados
const paper = document.querySelector(".paperContainer");
const rock = document.querySelector(".rockContainer");
const scissors = document.querySelector(".scissorsContainer");

//Agrupando todos os elementos em um array
const options = [paper, rock, scissors];

function randomOption() {
  //Função para gerar um número random entre 0 e 2
  function numberRandom() {
    let numberGeneration = Math.floor(
      Math.random() * (options.length - 1 + 1) + 0
    );

    return numberGeneration;
  }

  //Passando o número gerado como index do array para retornar o elemento correspondente
  const computerOption = options[numberRandom()];

  return computerOption;

  //sectionComputerOption.outerHTML = computerOption.innerHTML;
}

const computer = randomOption().outerHTML;

export { computer };
//Adicionando evento de clique
//paper.addEventListener("click", randomOption());
