// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib02(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fib02(n - 1) + fib02(n - 2);
}

console.log(fib02(1));
console.log(fib02(2));
console.log(fib02(3));
console.log(fib02(9));

module.exports = fib02;
