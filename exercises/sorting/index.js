// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  const sorted = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      const a = sorted[j];
      const b = sorted[j+1];

      if (a > b) {
        sorted[j] = b;
        sorted[j+1] = a;
      }
    }
  }

  return sorted;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
