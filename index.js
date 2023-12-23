// inputs nome dos jogadores
const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
// button para iniciar o jogo
const initGameBtn = document.querySelector(".init-game")
// button para resetar o jogo
const restartBtn = document.querySelector(".restart")
// nome do jogador atual
const turn = document.querySelector(".turn");
//Botões para inserir X ou O selecionados
const game = document.querySelectorAll(".tic-tac-toe button");

// função para iniciar o jogo
function initGame() {
  if(playerOne.value.length !== 0 && playerTwo.value.length !== 0) {
    game.forEach((item) => {
      item.disabled = false
      //turn.classList.remove("fail")
      turn.innerText = playerOne.value
      playerOne.classList.add('playing')
      turn.style.color = 'white'
    })
  } else {
    turn.innerText = 'Preencha os campos acima'
    turn.style.color = 'red'
  }
}

//Iniciando o jogo ao clicar no botão "Iniciar jogo"
initGameBtn.addEventListener("click", initGame)

//Função que ocorre caso tenha algum vencedor
function insertClassNameSuccess(nodeOne, nodeTwo, nodeThree) {
  game[nodeOne].classList.add("success")
  game[nodeTwo].classList.add("success")
  game[nodeThree].classList.add("success")
  if(playerTwo.classList.contains('playing')) {
    turn.innerText = `O jogador ${playerTwo.value} venceu`
  } else if(playerOne.classList.contains('playing')) {
    turn.innerText = `O jogador ${playerOne.value} venceu`
  }
}

// função para validar vitória
function validateWin(x, y, z, valueOne, valueTwo) {
  const conditionOne =  game[x].innerText === valueOne && game[y].innerText === valueOne && game[z].innerText === valueOne;
  const conditionTwo = game[x].innerText === valueTwo && game[y].innerText === valueTwo && game[z].innerText === valueTwo;
  return conditionOne || conditionTwo
}

// função para validar empate
function validateEmpate() {
  return game[0].innerText !== "" && game[1].innerText !== "" && game[2].innerText !== "" && game[3].innerText !== "" && game[4].innerText !== "" && game[5].innerText !== "" && game[6].innerText !== "" && game[7].innerText !== "" && game[8].innerText !== ""
}

//função funcionamento do jogo
function funcionamentoJogo(item) {
  if(playerTwo.classList.contains('playing')) {
    item.innerText = "O"
    item.disabled = true
    playerTwo.classList.remove('playing')
    playerOne.classList.add('playing')
    turn.innerText = playerOne.value
  } else if(playerOne.classList.contains('playing')) {
    item.innerText = "X"
    item.disabled = true
    playerOne.classList.remove('playing')
    playerTwo.classList.add('playing')
    turn.innerText = playerTwo.value
  }

  // validação de vitória e empate
  if(validateWin(0, 1, 2, 'O', 'X')) {
    insertClassNameSuccess(0, 1, 2)

  } else if(validateWin(0, 3, 6, 'O', 'X')) {
    insertClassNameSuccess(0, 3, 6)

  }else if(validateWin(6, 7, 8, 'O', 'X')) {
    insertClassNameSuccess(6, 7, 8)
    
  }else if(validateWin(2, 5, 8, 'O', 'X')) {
    insertClassNameSuccess(2, 5, 8)
  
  }else if(validateWin(3, 4, 5, 'O', 'X')) {
    insertClassNameSuccess(3, 4, 5)
  
  }else if(validateWin(6, 7, 8, 'O', 'X')) {
    insertClassNameSuccess(6, 7, 8)
  
  }else if(validateWin(0, 4, 8, 'O', 'X')) {
    insertClassNameSuccess(0, 4, 8)
  
  }else if(validateWin(2, 4, 6, 'O', 'X')) {
    insertClassNameSuccess(2, 4, 6)
  
  }else if(validateWin(1, 4, 7, 'O', 'X')) {
    insertClassNameSuccess(1, 4, 7)
  
  }else if(validateEmpate()) {
    turn.innerText = "Empate"
    game.forEach((item) => {
      item.classList.add("fail")
    })
  }
}

//Iterando ao clique de cada botão
game.forEach((item) => {
  item.addEventListener("click", () => {
    funcionamentoJogo(item);
  })
})

// função para reiniciar o jogo
function restart() {
  game.forEach((item) => {
    item.innerText = ''
    item.classList.remove('success')
    item.classList.remove('fail')
  })
  initGame();
}

// Resetar jogo
restartBtn.addEventListener("click", restart)