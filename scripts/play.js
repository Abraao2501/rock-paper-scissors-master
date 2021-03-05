//Declarando as variáveis dos elementos que irão ser utilizados
const paper = document.querySelector(".paperContainer");
const rock = document.querySelector(".rockContainer");
const scissors = document.querySelector(".scissorsContainer");

const result = document.querySelector(".winOrLose");

//Agrupando todos os elementos em um array
const options = [paper, rock, scissors];

//const userOption = options[numberRandom()];

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
  const userOption = options[numberRandom()];

  //Empate
  if (computerOption == userOption) {
    console.log("Stalemate" + computerOption.outerHTML + userOption.outerHTML);
  }

  //Papel+Pedra
  else if (computerOption == options[0] && userOption === options[1]) {
    console.log("You lose" + computerOption.outerHTML + userOption.outerHTML);
  }

  //Papel+Tesoura
  else if (computerOption == options[0] && userOption === options[2]) {
    console.log("You Win" + computerOption.outerHTML + userOption.outerHTML);
  }

  //Pedra+Papel
  else if (computerOption == options[1] && userOption === options[0]) {
    console.log("You Win" + computerOption.outerHTML + userOption.outerHTML);
  }

  //Pedra+Tesoura
  else if (computerOption == options[1] && userOption === options[2]) {
    console.log("You Lose" + computerOption.outerHTML + userOption.outerHTML);
  }

  //Tesoura+Papel
  else if (computerOption == options[2] && userOption === options[0]) {
    console.log("You Lose" + computerOption.outerHTML + userOption.outerHTML);
  }

  //Tesoura+Pedra
  else if (computerOption == options[2] && userOption === options[1]) {
    console.log("You Win" + computerOption.outerHTML + userOption.outerHTML);
  }
  return computerOption;
}

randomOption();
