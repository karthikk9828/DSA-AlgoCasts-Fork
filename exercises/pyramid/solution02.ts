// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid02(n: number, row = 0, step = ""): void {
  // end of the problem
  if (row === n) {
    return;
  }

  // end of the row, print and new recusrsive call for new row
  if (step.length === n * 2 - 1) {
    console.log(step);
    return pyramid02(n, row + 1);
  }

  const midColumn = Math.floor((n * 2 - 1) / 2);
  let str = "";

  if (midColumn - row <= step.length && midColumn + row >= step.length) {
    str += "#";
  } else {
    str += "0";
  }
  return pyramid02(n, row, step + str);
}

pyramid02(3);

module.exports = pyramid02;
