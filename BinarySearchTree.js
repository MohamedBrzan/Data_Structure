//* Binary Search Tree

//* Operations

//? isEmpty
//? getRoot
//? insert
//? insertNode
//? remove
//? removeNode
//? inOrder
//? preOrder
//? postOrder
//? contains
//? containsNode
//? search
//? searchNode

//* Node

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//* Tree

class Tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  getRoot() {
    return this.root;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
      return this.root;
    }

    return this.insertNode(this.root, node);
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
        return root;
      }
      return this.insertNode(root.left, node);
    } else if (node.value > root.value) {
      if (root.right === null) {
        root.right = node;
        return root;
      }
      return this.insertNode(root.right, node);
    }
  }
}

const tree = new Tree();

tree.insert(20);
tree.insert(10);
tree.insert(22);

console.log(tree.getRoot())
