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

function pyramid(n, markCount = 1) {
  const width = n + n - 1;
  const marks = '#'.repeat(markCount)
  const padding = (width - markCount) / 2
  console.log(' '.repeat(padding) + marks + ' '.repeat(padding))
  if (width === markCount) return;
  pyramid(n, markCount+2)
}

// function pyramid(n) {
//   const width = n + n - 1;
//   let markCount = 1;
//   for (let i = 1; i <= n; i++) {
//     const marks = '#'.repeat(markCount)
//     const padding = (width - markCount) / 2
//     console.log(' '.repeat(padding) + marks + ' '.repeat(padding))
//     markCount+=2;
//   }
// }

// function pyramid(n) {
//   const width = n + n - 1;
//   let markCount = 1;
//   for (let i = 1; i <= n; i++) {
//     const marks = new Array(markCount).fill('#')
//     const padding = (width - markCount) / 2
//     const row = [...new Array(padding).fill(' '), ...marks, ...new Array(padding).fill(' ')]
//     console.log(row.join(''))
//     markCount+=2;
//   }
// }

module.exports = pyramid;
