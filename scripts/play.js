//Declarando as variáveis dos elementos que irão ser utilizados
const paper = document.querySelector(".paperContainer");
const rock = document.querySelector(".rockContainer");
const scissors = document.querySelector(".scissorsContainer");

const resultContainer = document.querySelector(".result-container");
const winOrLose = document.querySelector(".winOrLose");
const resultYouPicked = document.querySelector(".you-picked");
const resultComputerPicked = document.querySelector(".the-house-picked");
const playAgainButton = document.querySelector(".playAgain");

const scoreNumber = document.querySelector(".scoreNumber");

//Agrupando todos os elementos em um array
const options = [paper, rock, scissors];

//Score Count
let score = 0;
scoreNumber.innerHTML = score;

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

//Exibindo as ecolhas na tela
function resultDisplay() {
  resultYouPicked.outerHTML = userOption.outerHTML;
  resultComputerPicked.outerHTML = computerOption.outerHTML;
}

//Comparação das opções escolhidas
function comparison() {
  //Empate
  if (computerOption == userOption) {
    resultDisplay();
    winOrLose.innerHTML = "Draw";
  }

  //Papel+Pedra
  else if (computerOption == options[0] && userOption === options[1]) {
    winOrLose.innerHTML = "You Lose";
    resultDisplay();
  }

  //Papel+Tesoura
  else if (computerOption == options[0] && userOption === options[2]) {
    winOrLose.innerHTML = "You Win!";
    resultDisplay();
    score = score + 1;
    scoreNumber.innerHTML = score;
  }

  //Pedra+Papel
  else if (computerOption == options[1] && userOption === options[0]) {
    winOrLose.innerHTML = "You Win!";
    resultDisplay();
    score = score + 1;
    scoreNumber.innerHTML = score;
  }

  //Pedra+Tesoura
  else if (computerOption == options[1] && userOption === options[2]) {
    winOrLose.innerHTML = "You Lose!";
    resultDisplay();
  }

  //Tesoura+Papel
  else if (computerOption == options[2] && userOption === options[0]) {
    winOrLose.innerHTML = "You Lose!";
    resultDisplay();
  }

  //Tesoura+Pedra
  else if (computerOption == options[2] && userOption === options[1]) {
    winOrLose.innerHTML = "You Win!";
    resultDisplay();
    score = score + 1;
    scoreNumber.innerHTML = score;
  }
}

//Colocsndo o container de resultados visível
function resultContainerDisplay() {
  resultContainer.style.display = "flex";
}

//Colocando o container de resultados invisível
function resultContainerDisplayNone() {
  resultContainer.style.display = "none";
}

//Scroll para o fim do documento
function scrollToBotton() {
  window.scrollTo(0, 1000);
}

//Scroll para o topo do documento
function scrollToTop() {
  window.scrollTo(0, 0);
}

//Botão de tentar novamente
playAgainButton.addEventListener("click", function playAgain() {
  userOption = 0;
  computerOption = 0;

  resultContainerDisplayNone();
  scrollToTop();

  let resultYouPickedInitial = document.querySelector(".you-picked");
  let resultComputerPickedInitial = document.querySelector(".the-house-picked");

  resultYouPicked.outerHTML = resultYouPickedInitial.outerHTML;
  resultComputerPicked.outerHTML = resultComputerPickedInitial.outerHTML;
});

//Eventos de clique || Escolha do usuário
paper.addEventListener("click", function paperClick() {
  userOption = options[0];
  randomOption();
  comparison();
  resultContainerDisplay();
  scrollToBotton();
});
rock.addEventListener("click", function rockClick() {
  userOption = options[1];
  randomOption();
  comparison();
  resultContainerDisplay();
  scrollToBotton();
});
scissors.addEventListener("click", function scissorClick() {
  userOption = options[2];
  randomOption();
  comparison();
  resultContainerDisplay();
  scrollToBotton();
});
