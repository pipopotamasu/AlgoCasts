// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//      [8, 9, 4],
//      [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const output = [...new Array(n)].map((e) => {
    return new Array(n)
  });

  let counter = 1;
  let indicator = 0;

  while (counter <= n * n) {
    // top row
    for (let i = indicator; i < n - indicator; i++) {
      if (output[indicator][i]) continue
      output[indicator][i] = counter;
      counter++
    }
    // right column
    for (let i = 1 ; i < n - indicator; i++) {
      if (output[i][output[i].length - 1 - indicator]) continue
      output[i][output[i].length - 1 - indicator] = counter;
      counter++
    }

    // bottom row
    for (let i = n - 1 - indicator; i > 0; i--) {
      if (output[output.length - 1 - indicator][i - 1]) continue
      output[output.length - 1 - indicator][i - 1] = counter;
      counter++
    }

    // left column
    for (let i = n - 1 - indicator; i > 0; i--) {
      if (output[i - 1][0]) continue
      output[i - 1][0] = counter;
      counter++
    }
    indicator++;
  }

  return output;
}

module.exports = matrix;
