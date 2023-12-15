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
    while (current.next) {
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

  getPrevCurrNextByIndex(index) {
    if (index === 0) {
      if (this.head) {
        return {
          prev: null,
          curr: this.head,
          next: his.head.next,
        };
      }
      return { prev: null, curr: null, next: null };
    }

    if (index > 0) {
      if (this.head) {
        let count = 0;
        let prev = this.head;
        let curr;
        let next;

        while (prev && count < index - 1) {
          prev = prev.next;
          count++;
        }
        curr = prev.next;
        next = curr.next;
        return { prev, curr, next };
      }
      return { prev: null, curr: null, next: null };
    }
  }

  test(index) {
    const { prev, curr, next } = this.getPrevCurrNextByIndex(index);
    return { prev, curr, next };
  }

  getPrevCurrNextByValue(index) {}

  display() {
    let str = '';
    let prev = this.head;
    while (prev) {
      str += ' => ' + prev.value;
      prev = prev.next;
    }
    return str;
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.prepend(2);
linkedList.append(3);
linkedList.prepend(4);

console.log(linkedList.display());
console.log(linkedList.test(3));
