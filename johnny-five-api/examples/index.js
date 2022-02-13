const { led } = require("./led/led");
const { blink } = require("./blink/blink");
const { trafficLight } = require("./traffic-light/traffic-light");

const projects = [
  {
    name: "Blink",
    description: "Teste",
    run: blink,
  },
  {
    name: "Led",
    description: "Teste",
    run: led,
  },
  {
    name: "Traffic Light",
    description: "Test..",
    run: trafficLight,
  },
];

module.exports = { projects };
