// Convert an C Instruction (1 1 1 a c1 c2 c3 c4 c5 c6 d1 d2 d3 j1 j2 j3) into it's binary value
const sym = require('../symbolTable');
const tabula = new sym;
function CInstruction(arr) {
  let c = '111';
  let write = '';
  let comp = '';
  let dest = '';
  let jump = '';
  let instruction = '';
  // Check to see if the write bit is asserted
  if (arr[1].indexOf('M') !== -1) {
    write = '1';
    for (let prop in tabula.comp1) {
      if (arr[1] === prop) {
        comp = tabula.comp1[prop];
      }
    }
    // Else the load bit is asserted
  } else {
    write = '0';
    for (let prop in tabula.comp0) {
      if (arr[1] === prop) {
        comp = tabula.comp0[prop];
      }
    }
  }
  // Loop through destination table
  for (let prop in tabula.dest) {
    if (arr[0] === prop) {
      dest = tabula.dest[prop];
    }
  }
  // Check for non existant jump bits (no jump)
  if (arr[2] === undefined) {
    jump = '000';
  }
  // Loop through jump table
  for (let prop in tabula.jump) {
    if (arr[2] === prop) {
      jump = tabula.jump[prop];
      break;
    } else if (arr[1] === prop) { // If it's Jump Loop bit...
      jump = tabula.jump[prop];
      for (let prop in tabula.comp0) {
        if (arr[0] === prop) {
          write = '0';
          dest = '000';
          comp = tabula.comp0[prop];
        }
      }
    }
  }
  instruction = c.concat(write, comp, dest, jump);
  return instruction;
}

module.exports = CInstruction;