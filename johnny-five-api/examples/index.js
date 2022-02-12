const { led } = require("./led/led");
const { blink } = require("./blink/blink");

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
];

module.exports = { projects };
