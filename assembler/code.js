const sym = require('./symbolTable');
const AInstruction = require('./instructions/A-Instruction');
const CInstruction = require('./instructions/C-Instruction');
const tabula = new sym;

// Deal with user symbols
function varToNumbers(arg) {
  let sans = arg.match(/[^\@]+/g);
  for (let s in tabula.user) {
    if (sans[0] === s) {
      return tabula.user[s];
    }
  }
  return sans[0];
}

// Return the binary value of instructions
const code = function (arr) {
  let copy = '';
  for (let i = 0; i < arr.length; i++) {
    if (/\@/.test(arr[i])) {
      // A Instruction
      copy = arr[i][0];
      // Make a function which uses tables to deal with symbols
      let noSym = varToNumbers(copy);
      let x = noSym.match(/\d+/g);
      arr[i] = AInstruction(x);
    } else {
      // C Instruction
      arr[i] = CInstruction(arr[i]);
    }
  }
  return arr;
}

module.exports = code;