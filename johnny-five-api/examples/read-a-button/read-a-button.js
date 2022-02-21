const { Led, Board, Button } = require("johnny-five");
const { boardConfig } = require("../../configs/arduino.config");

function readAButton() {
  const board = new Board(boardConfig);

  board.on("ready", () => {
    const ledRed = new Led(13);
    const ledYellow = new Led(12);
    const button = new Button(9);

    button.on("up", () => {
      ledRed.on();
      ledYellow.off();
    });

    button.on("down", () => {
      ledRed.off();
      ledYellow.on();
    });
  });
}

module.exports = { readAButton };
