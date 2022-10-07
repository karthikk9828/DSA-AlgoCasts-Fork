// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

import { Node } from "./node";

export class Tree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  traverseBF(callback: (node: Node) => void): void {
    let result: Node[] = [];
    result.push(this.root!);

    while (result.length > 0) {
      let current = result.shift();
      result.push(...current?.children!);

      callback(current!);
      console.log(current?.data);
    }
  }

  traverseDF(callback: (node: Node) => void): void {
    let result: Node[] = [];
    result.push(this.root!);

    while (result.length > 0) {
      let current = result.shift();
      result.unshift(...current?.children!);

      callback(current!);
      console.log(current?.data);
    }
  }
}

const root = new Node(1);
const tree = new Tree();

tree.root = root;
tree.root.addChild(2);
tree.root.addChild(3);

tree.root.children[0].addChild(4);
tree.root.children[0].addChild(5);

tree.root.children[1].addChild(6);
tree.root.children[1].addChild(7);

console.log(tree);

console.log("\n----------BFS----------\n");

tree.traverseBF(() => {});

console.log("\n----------DFS----------\n");

tree.traverseDF(() => {});
