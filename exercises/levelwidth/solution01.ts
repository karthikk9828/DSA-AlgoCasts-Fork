// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

import { Node } from "../tree/node";
import { Tree } from "../tree/solution01";

export function levelWidth(root: Node): number[] {
  const array: any[] = [root, "stopper"];
  const counters: number[] = [0];

  while (array.length > 1) {
    const node = array.shift();

    if (node === "stopper") {
      counters.push(0);
      array.push("stopper");
    } else {
      array.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
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

console.log("\n----------levelWidth----------\n");

console.log(levelWidth(root));
