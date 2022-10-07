// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n: number): number {
  const array = n.toString().split("");
  const reversedString = array.reduce((reverse, char) => char + reverse, "");
  const reveresedNumber = parseInt(reversedString) * Math.sign(n);
  console.log(reveresedNumber);
  return reveresedNumber;
}

reverseInt(0);
reverseInt(1234);
reverseInt(-1234);

module.exports = reverseInt;
