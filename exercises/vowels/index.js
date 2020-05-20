// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const VOWELS = ['a', 'e', 'i', 'o', 'u']

function vowels(str) {
  const strs = str.match(/[aeiou]/gi);
  return strs ? strs.length : 0;
}

// function vowels(str) {
//   const strs = str.split('');
//   return strs.filter((s) => VOWELS.includes(s.toLowerCase())).length
// }

module.exports = vowels;
