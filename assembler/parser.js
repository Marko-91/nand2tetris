//***************************************************************************************************//
// const file = fs.readFileSync('test.asm', 'utf8'); // READ FILE
// fs.readFile('test.asm', 'utf8', (err, data) => {
//   // console.log(data); // READ FILE ASYNC
//   fs.writeFile("write.txt", data, err => { console.log(err) });
// });
// fs.writeFileSync("writeMe.txt", file); WRITE FILE
// console.log(file)
//***************************************************************************************************//
const regExp = /[^;=\s]+/g // Ignore whitespaces and equality and ; empty lines, comments
let items = [];
const sym = require('./symbolTable');
const tabula = new sym;

const parser = function (string) {
  const arr = string.split(/\n/);
  arr.forEach(line => items.push(line.match(regExp)));
  return items.filter(line => line !== null);
}

module.exports = parser;