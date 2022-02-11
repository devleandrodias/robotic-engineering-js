const { Board, Led } = require("johnny-five");
const { boardConfig } = require("../../configs/arduino.config");

function blink() {
  const board = new Board(boardConfig);

  board.on("ready", () => {
    new Led(13).blink(500);
  });
}

module.exports = { blink };
