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
    run: () => {
      console.log("Test led...");
    },
  },
];

module.exports = { projects };
