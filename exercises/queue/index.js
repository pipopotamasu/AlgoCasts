// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// class Queue {
//   constructor () {
//     this.data = [];
//   }

//   add (el) {
//     this.data = [...this.data, el];
//   }

//   remove () {
//     const removed = this.data.slice(0, 1)[0];
//     this.data = this.data.slice(1, this.data.length);
//     return removed;
//   }
// }

class Queue {
  constructor () {
    this.data = [];
  }

  add (el) {
    this.data.unshift(el);
  }

  remove () {
    return this.data.pop();
  }
}

module.exports = Queue;
