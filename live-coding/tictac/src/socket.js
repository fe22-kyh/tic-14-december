/* web based logic */

function GameWebInterface(addr) {
  this.apiUri = `${addr}`;
  this.socket = io(this.apiUri);
}

GameWebInterface.prototype.create = function (updateHandler) {
  const initBoard = ["", "", "", "", "", "", "", "", ""];
  const fetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ board: initBoard })
  };

  fetch(this.apiUri + "/room", fetchOptions)
    .then(resp => resp.json())
    .then(data => {
      this.onUpdate(data.id, updateHandler);
      updateHandler(data);
    });
}

GameWebInterface.prototype.join = function (id, updateHandler) {
  fetch(`${this.apiUri}/room/${id}`)
    .then(resp => resp.json())
    .then(data => {
      this.onUpdate(data.id, updateHandler);
      updateHandler(data);
    });
}

GameWebInterface.prototype.onUpdate = function (id, updateHandler) {
  this.socket.on("tic-update-" + id, updateHandler);
}

GameWebInterface.prototype.update = function (id, board) {
  this.socket.emit("tic-update", { id: id, board: board });
}

const API_URL = "https://fetictac.azurewebsites.net";
const game = new GameWebInterface(API_URL);