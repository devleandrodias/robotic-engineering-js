const { stdin, stdout } = require("process");
const { createInterface } = require("readline");
const { projects } = require("./examples");

function main() {
  const rl = createInterface({ input: stdin, output: stdout });

  console.clear();

  console.log("======= JOHNNY FIVE ARDUINO =======\n");

  console.log("0 - Configure arduino");
  console.log("1 - List projects");
  console.log("2 - Select project");
  console.log("3 - Exit");

  rl.question("\nDigit your option: ", (answer) => {
    rl.close();
    console.clear();
    swtichExample(answer);
  });
}

function listProjects() {
  projects.forEach((x, i) => {
    console.log(`${i} || Name: ${x.name} > Description: ${x.description}`);
  });

  const rl = createInterface({ input: stdin, output: stdout });

  rl.question("\nSelect index of project: ", (answer) => {
    rl.close();
    console.clear();
    projects.find((_, i) => i === Number(answer)).run();
  });
}

function swtichExample(answer) {
  switch (Number(answer)) {
    case 1:
      listProjects();
      break;
    default:
      console.log("Invalid option!");
      break;
  }
}

main();
