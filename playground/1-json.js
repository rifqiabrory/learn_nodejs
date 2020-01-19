const fs = require("fs");

const data = {
  name: "Rifqi",
  address: "Jakarta",
  age: 26
};

// write file
// const jsonStringfy = JSON.stringify(data);
// fs.writeFileSync("1-json.json", jsonStringfy);

// read file
const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const resultJson = JSON.parse(dataJson);
// console.log(resultJson.name);

// change property
resultJson.name = "Abrory";
resultJson.address = "Tangerang Selatan";
resultJson.age = 25;

const changeResult = JSON.stringify(resultJson);
fs.writeFileSync("1-json.json", changeResult);
