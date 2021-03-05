//Declarando as variáveis dos elementos que irão ser utilizados
const paper = document.querySelector(".paperContainer");
const rock = document.querySelector(".rockContainer");
const scissors = document.querySelector(".scissorsContainer");

//Agrupando todos os elementos em um array
const options = [paper, rock, scissors];

//Opção do usuário e computador
let userOption = 0;
let computerOption = 0;

//Escolha do computador, gerada de forma aleatória
function randomOption() {
  //Função para gerar um número random entre 0 e 2
  function numberRandom() {
    let numberGeneration = Math.floor(
      Math.random() * (options.length - 1 + 1) + 0
    );

    return numberGeneration;
  }

  //Passando o número gerado como index do array para retornar o elemento correspondente
  computerOption = options[numberRandom()];
}

//Comparação das opções escolhidas
function comparison() {
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
}

//Eventos de clique || Escolha do usuário
paper.addEventListener("click", function paperClick() {
  userOption = options[0];
  randomOption();
  comparison();
});
rock.addEventListener("click", function rockClick() {
  userOption = options[1];
  randomOption();
  comparison();
});
scissors.addEventListener("click", function scissorClick() {
  userOption = options[2];
  randomOption();
  comparison();
});
