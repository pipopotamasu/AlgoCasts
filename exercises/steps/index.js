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

function steps(n, stepCount = 1) {
  const arr = new Array(n).fill(' ')
  const result = [...new Array(stepCount).fill('#'), ...arr.slice(stepCount)]
  console.log(result.join(''))
  if (stepCount === n) return;
  steps(n, stepCount + 1)
}

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     const arr = new Array(n).fill(' ')
//     const steps = [...new Array(i).fill('#'), ...arr.slice(i)]
//     console.log(steps.join(''))
//   }
// }

module.exports = steps;
