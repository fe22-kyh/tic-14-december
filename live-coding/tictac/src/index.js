/* Listeners and setting player names */
let symbols = ['X', 'O'];
let playerTurn = 0;
let turns = 0;
let playerOne = document.querySelector('.player-one');
let playerTwo = document.querySelector('.player-two'); //.value för att få värdet sen
// let startButton = document.querySelector('.start-btn');
// startButton.addEventListener('click', () => {
//   console.log(
//     `Player one: ${playerOne.value}, Player two: ${playerTwo.value}`
//   );
// });

const gameBoard = document.querySelector('.gameboard');
const cards = document.querySelectorAll(".card");


// Från spelplan till lista, spelplanen hämtas med querySelectorAll(".card")
function getBoardList() {
  let board = []
  //Hämta symbolerna på varje kort och lägg dem i en lista

  for (let card of cards) {
    board.push(card.innerText);
  }
  return board;
}

// Från lista till spelplan
function renderFromList(board) {
  // Uppdatera korten på spelplanen med symbolerna i board
  for (let i = 0; i < board.length; i++) {
    cards[i].textContent = board[i];
  }
}

gameBoard.addEventListener('click', (event) => {
  if (event.target.classList != 'gameboard') {
    event.target.innerText = symbols[playerTurn];
    playerTurn = (playerTurn + 1) % 2;
    turns++;
  }
  if (turns == 9) {
    setTimeout(() => {
      alert('Game Over!');
    }, 300);
  }

  // let board = ["", "X", "", "X", "", "", "O", "", ""];
  let board = getBoardList();
  game.update(idValue, board);
});


const createRoomBtn = document.querySelector(".create-room-btn");
const roomIdTxt = document.querySelector(".room-id-txt");

const joinRoomBtn = document.querySelector(".join-room-btn");
const roomIdField = document.querySelector(".room-id-field");

let idValue = -1;

function updateHandler(data) {
  roomIdTxt.textContent = "Room id: " + data.id;
  idValue = data.id;

  renderFromList(data.board);
}

function createRoom() {
  game.create(updateHandler)
}

createRoomBtn.addEventListener('click', createRoom);

function joinRoom() {
  game.join(roomIdField.value, updateHandler);
}

joinRoomBtn.addEventListener('click', joinRoom);