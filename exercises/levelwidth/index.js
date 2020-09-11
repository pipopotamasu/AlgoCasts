// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const conters = [];
  let queue = [root];

  while (queue.length > 0) {
    const nextQueue = [];
    conters.push(queue.length);

    queue.forEach((node) => {
      nextQueue.push(...node.children);
    });

    queue = nextQueue;
  }

  return conters;
}

// function levelWidth(root) {
//   const arr = [root, 's'];
//   const counters = [0];

//   while (arr.length > 1) {
//     const node = arr.shift();

//     if (node === 's') {
//       counters.push(0);
//       arr.push('s');
//     } else {
//       arr.push(...node.children);
//       counters[counters.length - 1]++;
//     }
//   }

//   return counters;
// }

module.exports = levelWidth;
