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
  const sorted = [...arr];

  for (let i = 0; i < arr.length - 1; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      const min = sorted[indexOfMin];
      const val = sorted[j];

      if (min > val) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      const lesser = sorted[indexOfMin];
      sorted[indexOfMin] = sorted[i];
      sorted[i] = lesser;
    }
  }

  return sorted;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let results = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
