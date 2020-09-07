// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// function midpoint(list) {
//   const size = list.size();
//   if (size % 2 === 0) {
//     return list.getAt((Math.floor((size + 1) / 2)) - 1);
//   } else {
//     return list.getAt(((size + 1) / 2) - 1);
//   }
// }

// function midpoint(list) {
//   let index = 0;
//   const size = list.size();

//   while (index < size) {
//     const nextNode = list.getAt(index * 2);
//     if (nextNode && !nextNode.next) {
//       return list.getAt(index);
//     } else if (!nextNode) {
//       return list.getAt(index - 1)
//     }

//     index++;
//   }
// }

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

module.exports = midpoint;
