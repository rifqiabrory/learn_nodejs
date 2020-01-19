const validator = require("validator");
const chalk = require("chalk");
const add = require("./utils");
// const fs = require("fs");

// //fs.writeFileSync("./storage/note.txt", "write some data");
// fs.appendFileSync("./storage/note.txt", "data to appand")
const a = add();
console.log(a);
const email = "email@gmail.com";
const is = validator.isEmail(email);
console.log(is);

console.log(chalk.green.bold("Success!"));
console.log(chalk.red.inverse.bold("Error!"));

console.log(process.argv[2]);
const command = process.argv[2];
console.log(process.argv);

if (command === "add") {
  console.log("Adding Note");
} else if (command === "remove") {
  console.log("Remove Note");
}
