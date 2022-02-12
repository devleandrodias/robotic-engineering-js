const { Board, Led } = require("johnny-five");
const { boardConfig } = require("../../configs/arduino.config");

function led() {
  const board = new Board(boardConfig);

  board.on("ready", () => {
    const ledRed = new Led(8);
    const ledGreen = new Led(9);

    ledRed.on();
    ledGreen.on();

    setInterval(() => {
      ledRed.toggle();
      ledGreen.toggle();
    }, 500);
  });
}

module.exports = { led };
