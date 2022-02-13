const { Board, Led } = require("johnny-five");
const { boardConfig } = require("../../configs/arduino.config");

function trafficLight() {
  const board = new Board(boardConfig);

  board.on("ready", () => {
    const ledRed = new Led(12);
    const ledYellow = new Led(11);
    const ledGreen = new Led(10);
    const ledRedPedestrian = new Led(9);
    const ledGreenPedestrian = new Led(8);

    ledRed.on();
    ledYellow.off();
    ledGreen.off();
    ledRedPedestrian.off();
    ledGreenPedestrian.on();

    setTimeout(() => {
      ledRed.off();
      ledYellow.on();
      ledGreen.off();
      ledRedPedestrian.on();
      ledGreenPedestrian.off();
    }, 2000);

    setTimeout(() => {
      ledRed.off();
      ledYellow.off();
      ledGreen.on();
      ledRedPedestrian.on();
      ledGreenPedestrian.off();
    }, 5000);
  });
}

module.exports = { trafficLight };
