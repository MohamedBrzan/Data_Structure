import { SinglyLinkedList } from './LinkedList.js';

class Queue {
  constructor() {
    this.queue = new SinglyLinkedList();
  }

  isEmpty() {
    return this.queue.isEmpty();
  }

  enqueue(value) {
    this.queue.append(value);
  }

  dequeue() {
    this.queue.removeFromFront();
  }

  peek() {
    return this.queue.getFirstNode();
  }

  size() {
    return this.queue.size();
  }

  display() {
    return this.queue.display();
  }

  clear() {
    return this.queue.clear();
  }
}

const arrQueue = new Queue();

console.log(arrQueue.isEmpty());

arrQueue.enqueue(1);
arrQueue.enqueue(2);
arrQueue.enqueue(3);
arrQueue.enqueue(4);
arrQueue.enqueue(5);

console.log(arrQueue.size());
console.log(arrQueue.peek());

console.log(arrQueue.isEmpty());

console.log(arrQueue.display());
