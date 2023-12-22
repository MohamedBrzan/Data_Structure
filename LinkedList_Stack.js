import { SinglyLinkedList } from './LinkedList.js';

class Stack {
  constructor() {
    this.stack = new SinglyLinkedList();
  }

  isEmpty() {
    return this.stack.isEmpty();
  }

  push(value) {
    this.stack.append(value);
  }

  pop() {
    this.stack.removeFromEnd();
  }

  peek() {
    return this.stack.getLastNode();
  }

  size() {
    return this.stack.size();
  }

  display() {
    return this.stack.display();
  }

  clear() {
    this.stack.clear();
  }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peek());

console.log(stack.display());
