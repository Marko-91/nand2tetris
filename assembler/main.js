const fs = require('fs');
const parser = require('./parser');
const code = require('./code');
const sym = require('./symbolTable');

/*
* PARSER : unpacks each instruction into its underlying fields
* CODE : translates each field into its corresponding binary value
* SYMBOL TABLE: manages the symbol table
* MAIN : initializes the I/O files and drives the process
*/

function nice(arr) {
  str = '';
  arr.forEach(el => str += `${el}\n`)
  return str;
}

const file = fs.readFileSync('test.asm', 'utf8');
const out = parser(file);
const parsed = code(out);
const lines = nice(parsed);
fs.writeFileSync("out.txt", lines);