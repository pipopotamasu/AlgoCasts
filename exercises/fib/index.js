// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const arr = [];

//   [...Array(n + 1)].forEach((_, i) => {
//     if (i === 0) {
//       arr.push(0);
//     } else if (i === 1) {
//       arr.push(1);
//     } else {
//       const prev = arr[i-1];
//       const prevPrev = arr[i-2];
//       arr.push(prev + prevPrev);
//     }
//   });

//   return arr[n];
// }

// function fib(n) {
//   const arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const prev = arr[i-1];
//     const prevPrev = arr[i-2];

//     arr.push(prev + prevPrev);
//   }

//   return arr[n];
// }

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

function memoize (fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    // const result = fn.apply(this, args);
    const result = fn(...args);
    cache[args] = result;
    return result;
  }
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib)

module.exports = fib;
