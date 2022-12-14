/* Vinna med en rad, vinna med kolumn, vinna med diagonal */

function checkForWinner(board) {
  if (board[0] != " " && board[0] == board[1] && board[0] == board[2]) {
    return board[0];
  }

  if (board[3] != " " && board[3] == board[4] && board[3] == board[5]) {
    return board[3];
  }
}