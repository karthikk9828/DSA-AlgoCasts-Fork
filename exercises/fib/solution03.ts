// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(slowFib: Function): Function {
  const cache = new Map<number, number>();

  return function (arg: any) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }

    const result = slowFib(arg);
    cache.set(arg, result);

    return result;
  };
}

function slowFib(n: number): number {
  if (n <= 1) {
    return n;
  }

  return memoizedFib(n - 1) + memoizedFib(n - 2);
}

const memoizedFib = memoize(slowFib);

const start = Date.now();
const test1 = memoizedFib(2000);
const end = Date.now();

console.log(`test1 : ${test1}`);
console.log(`Time : ${(end - start) / 1000} seconds`);

module.exports = memoizedFib;
