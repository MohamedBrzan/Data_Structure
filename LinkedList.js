//* LinkedList

//* Operations

//? => isEmpty();
//? => append();
//? => prepend();
//? => peek();
//? => size();
//? => display();
//? => clear();

//* Node

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
      return this.head;
    }
    let current = this.head;
    while (current) {
      current = current.next;
    }
    current.next = node;
    return this.head;
  }

  prepend(value) {
    const node = new Node(value);
    this.length++;
    if (this.head) {
      node.next = this.head;
      this.head = node;
      return this.head;
    }
    this.head = node;
    return this.head;
  }
}
