// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  insertFirst (data) {
    this.head = new Node(data, this.head);
  }

  size () {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst () {
    return this.head;
  }

  getLast () {
    if (!this.head) return null;
    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear () {
    this.head = null;
  }

  removeFirst () {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast () {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head.next;
    let prevNode = this.head;

    while (node.next) {
      prevNode = node;
      node = node.next;
    }

    prevNode.next = null;
  }

  insertLast (data) {
    let last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt (index) {
    let node = this.head;

    for (let i = 0; i <= index; i++) {
      if (!node) return null;

      if (i === index) {
        return node;
      } else {
        node = node.next;
      }
    }
  }

  removeAt (index) {
    const node = this.getAt(index);
    if (!node) return null;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      const prevNode = this.getAt(index - 1);
      prevNode.next = node.next;
    }
  }

  insertAt(data, index) {
    if (!this.head || index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prevNode = this.getAt(index - 1) || this.getLast();
    prevNode.next = new Node(data, prevNode.next);
  }
}

module.exports = { Node, LinkedList };
