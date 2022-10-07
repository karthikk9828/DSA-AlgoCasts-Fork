// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps02(n: number, row = 0, step = ""): void {
  // end of the problem
  if (row === n) {
    return;
  }

  // end of the row, print and new recusrsive call for new row
  if (step.length === n) {
    console.log(step);
    return steps02(n, row + 1);
  }

  // current row
  if (step.length <= row) {
    step += "#";
  } else {
    step += " ";
  }
  return steps02(n, row, step);
}

steps02(2);
steps02(3);
steps02(4);

module.exports = steps02;
