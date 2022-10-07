// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

import { Node } from "../bst/node";

function validate(node: Node, min = null, max = null): boolean {
  if (max !== null && node.data > max) {
    return false;
  }
  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left != null && !validate(node.left, min, node.data)) {
    return false;
  }
  if (node.right != null && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;
