//* Binary Search Tree

//* Operations

//? isEmpty
//? getRoot
//? insert
//? insertNode
//? min
//? max
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

    return this.#insertNode(this.root, node);
  }

  #insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
        return root;
      }
      return this.#insertNode(root.left, node);
    } else if (node.value > root.value) {
      if (root.right === null) {
        root.right = node;
        return root;
      }
      return this.#insertNode(root.right, node);
    }
  }

  #min(root) {
    if (!this.isEmpty()) {
      if (!root.left) return root;
      return this.#min(root.left);
    }
  }

  #max(root) {
    if (!this.isEmpty()) {
      if (!root.right) return root;
      return this.#max(root.right);
    }
  }

  inOrder(root) {
    if (root !== null) {
      this.inOrder(root.left);
      console.log(root);
      this.inOrder(root.right);
    }
  }

  preOrder(root) {
    if (root !== null) {
      console.log(root);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root) {
    if (root !== null) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root);
    }
  }

  contains(value) {
    if (this.root.value === value) return true;
    return this.#containsNode(this.root, value);
  }

  #containsNode(root, value) {
    if (value < root?.value) {
      if (value === root.left?.value) return true;
      return this.#containsNode(root.left, value);
    } else if (value > root?.value) {
      if (value === root.right?.value) return true;
      return this.#containsNode(root.right, value);
    }
    return false;
  }

  search(value) {
    if (this.root.value === value) return this.root;
    return this.#searchNode(this.root, value);
  }

  #searchNode(root, value) {
    if (value < root?.value) {
      if (value === root.left?.value) return root.left;
      return this.#searchNode(root.left, value);
    } else if (value > root?.value) {
      if (value === root.right?.value) return root.right;
      return this.#searchNode(root.right, value);
    }
  }

  remove(value) {
    return this.#removeNode(this.root, value);
  }

  #removeNode(root, value) {
    if (root === null) return root;
    else if (value < root.value) root.left = this.#removeNode(root.left, value);
    else if (value > root.value)
      root.right = this.#removeNode(root.right, value);
    else {
      if (!root.right && !root.left) return null;
      if (!root.right) return root.left;
      if (!root.left) return root.right;
      root.value = this.#min(root.right);
      console.log('value => ', root.value);
      root.right = this.#removeNode(root.right, root.value);
    }
    return root;
  }
}

const tree = new Tree();

tree.insert(20);
tree.insert(10);
tree.insert(22);
tree.insert(25);
tree.insert(28);
tree.insert(21);
tree.insert(19);
tree.insert(12);

console.log(tree.getRoot());
console.log('-------------------------------------');
tree.remove(21);
console.log('-------------------------------------');
console.log(tree.getRoot());
