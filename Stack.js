//** Stack []

//* Operations

//? => isEmpty();
//? => push();
//? => pop();
//? => peek();
//? => size();
//? => display();
//? => clear();

class Stack {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  display() {
    return this.stack.toString();
  }

  clear() {
    this.stack = [];
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.display()); // 1,2,3,4,5

console.log(stack.isEmpty()); // false

console.log(stack.size()); // 5

stack.pop();

console.log(stack.display()); // 1,2,3,4

console.log(stack.size()); // 4

stack.clear();

console.log(stack.display()); //
