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

  isEmpty() {
    return this.length === 0;
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
    if (index > this.length - 1) throw new Error('index out of bounds');
    if (index === 0) {
      if (this.head) {
        return {
          prev: null,
          curr: this.head,
          next: this.head.next,
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
        curr = prev?.next;
        next = curr?.next;
        return { prev, curr, next };
      }
      return { prev: null, curr: null, next: null };
    }
  }

  getPrevCurrNextByValue(value) {
    if (this.head) {
      if (this.head.value === value) {
        return {
          prev: null,
          curr: this.head,
          next: this.head.next,
        };
      }
      let prev = this.head;
      let curr;
      let next;
      while (prev.next.value !== value) {
        prev = prev.next;
      }
      curr = prev.next;
      next = curr.next;
      return { prev, curr, next };
    }

    return { prev: null, curr: null, next: null };
  }

  remove(index, value) {
    if (index && !value) {
      if (this.head) {
        const { prev, next } = this.getPrevCurrNextByIndex(index);
        if (prev === null) {
          this.head = this.head.next;
          return 'Head Node is removed';
        } else if (next === null) {
          prev.next = null;
          return 'Node is removed';
        }
        if (prev.next !== null && next !== null) {
          prev.next = next;
          return 'Node is removed';
        }
      }
    }
    if (!index && value) {
      if (this.head) {
        const { prev, next } = this.getPrevCurrNextByValue(value);
        if (prev === null) {
          this.head = this.head.next;
          return 'Head Node is removed';
        } else if (next === null) {
          prev.next = null;
          return 'Node is removed';
        }

        prev.next = next;
        return 'Node is removed';
      }
    }
    if (index && value) {
      return 'You Must choose remove by value or by index, you cannot choose both';
    }
    return null;
  }

  peek() {
    return this.head.value;
  }

  size() {
    return this.length;
  }

  display() {
    let str = '';
    let prev = this.head;
    while (prev) {
      str += ' => ' + prev.value;
      prev = prev.next;
    }
    return str;
  }

  clear() {
    this.head = null;
    return this.head;
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.prepend(2);
linkedList.append(3);
linkedList.prepend(4);

// console.log(linkedList.display());
// console.log(linkedList.remove(null, 1));
// console.log(linkedList.display());
console.log(linkedList.display());
linkedList.clear();
console.log(linkedList.display());
