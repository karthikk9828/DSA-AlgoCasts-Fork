// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n: number): number {
  let result = [0, 1];

  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  console.log(result);

  return result[result.length - 1];
}

fib(1);
fib(2);
fib(4);
fib(9);

module.exports = fib;
