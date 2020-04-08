// Convert an A Instruction into it's binary value
function AInstruction(x) {
  let num = parseInt(x, 10);
  let str = '0';
  for (let i = 14; i >= 0; i--) {
    if (num - Math.pow(2, i) >= 0) {
      str += "1";
      num -= Math.pow(2, i);
    } else {
      str += "0";
    }
  }
  return str;
}

module.exports = AInstruction;