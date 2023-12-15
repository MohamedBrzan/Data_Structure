//* [ Queue ]

//* Operations

//? => isEmpty();
//? => enqueue();
//? => dequeue();
//? => peek();
//? => size();
//? => display();
//? => clear();

class ArrQueue {
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  display() {
    return this.queue.toString();
  }

  clear() {
    this.queue = [];
  }
}

// const arrQueue = new ArrQueue();

// arrQueue.enqueue(1);
// arrQueue.enqueue(2);
// arrQueue.enqueue(3);
// arrQueue.enqueue(4);
// arrQueue.enqueue(5);

// console.log(arrQueue.display()); // 1,2,3,4,5

// console.log(arrQueue.isEmpty()); // false

// console.log(arrQueue.size()); // 5

// arrQueue.dequeue();

// console.log(arrQueue.display()); // 2,3,4,5

// console.log(arrQueue.size()); // 4

// arrQueue.clear();

// console.log(arrQueue.display()); //

//* { Queue }

class ObjQueue {
  constructor() {
    this.queue = {};
    this.length = 0;
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(value) {
    this.queue[++this.rear] = value;
    if (this.front === -1) ++this.front;
    this.length++;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.length--;
    if (!this.queue[++this.front]) {
      this.clear();
      return value;
    }
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.length;
  }

  display() {
    for (const obj in this.queue) {
      console.log(obj, ' => ', this.queue[obj]);
    }
  }

  clear() {
    this.queue = {};
    this.front = -1;
    this.rear = -1;
    this.length = 0;
  }
}

// const objQueue = new ObjQueue();

// objQueue.enqueue(50);
// objQueue.enqueue(66);
// objQueue.enqueue(12);
// objQueue.enqueue(9);
// objQueue.enqueue(7);

// console.log(objQueue.display()); // 1,2,3,4,5

// console.log(objQueue.isEmpty()); // false

// console.log(objQueue.size()); // 5

// objQueue.dequeue();

// console.log(objQueue.peek()); // 66

// console.log(objQueue.display()); // 2,3,4,5

// console.log(objQueue.size()); // 4

// objQueue.clear();

// console.log(objQueue.display()); //

//* ( Queue )

//? ==> isFull()
class CircleQueue {
  constructor(capacity) {
    this.queue = new Array(capacity);
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  isFull() {
    return this.length === this.capacity;
  }

  enqueue(value) {
    if (this.isFull()) throw new Error('CircleQueue is full');
    this.queue[++this.rear % this.capacity] = value;
    if (this.front === -1) ++this.front;
    this.length++;
  }

  dequeue() {
    const value = this.queue[this.front];
    this.queue[this.front] = null;
    this.length--;
    this.front = ++this.front % this.capacity;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.length;
  }

  display() {
    return this.queue.toString();
  }

  clear() {
    this.queue = new Array(this.capacity);
    this.front = -1;
    this.rear = -1;
    this.length = 0;
  }
}

const circleQueue = new CircleQueue(5);

circleQueue.enqueue(50);
circleQueue.enqueue(66);
circleQueue.enqueue(12);
circleQueue.enqueue(9);
circleQueue.enqueue(7);
// circleQueue.enqueue(27);

console.log(circleQueue.display()); // 1,2,3,4,5

console.log(circleQueue.isEmpty()); // false

console.log(circleQueue.size()); // 5

circleQueue.dequeue();

circleQueue.enqueue(27);

console.log(circleQueue.peek()); // 66

console.log(circleQueue.display()); // 66,12,9,7

console.log(circleQueue.size()); // 5

circleQueue.clear();

console.log(circleQueue.display()); //
