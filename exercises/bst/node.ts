// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

export class Node {
  data: any;
  left: Node | null;
  right: Node | null;

  constructor(data: any) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data: any) {
    if (data < this.data) {
      if (this.left !== null) {
        this.left.insert(data);
      } else {
        this.left = new Node(data);
      }
    } else {
      if (this.right !== null) {
        this.right.insert(data);
      } else {
        this.right = new Node(data);
      }
    }
  }

  contains(data: any): Node | null {
    if (data === this.data) {
      return this;
    } else if (data < this.data && this.left !== null) {
      return this.left?.contains(data);
    } else if (this.right !== null) {
      return this.right?.contains(data);
    }
    return null;
  }
}

const items = [10, 0, 12, -1, 5, 11, 20, 17, 99];

const root = new Node(items[0]);

for (let i = 1; i < items.length; i++) {
  root.insert(items[i]);
}

console.log(root);

console.log("\n-------------contains--------------");
console.log(root.contains(20));
console.log(root.contains(10000));
