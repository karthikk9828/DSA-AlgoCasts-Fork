// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

import { Node } from "../linkedlist/node";
import { LinkedList } from "../linkedlist/solution01";

export function fromLast(list: LinkedList<any>, n: number): Node<any> | null {
  if (list.isEmpty()) return null;

  let slow = list.head;
  let fast = list.head;

  // create 'n' spaces between slow and fast
  for (let i = 0; i < n; i++) {
    fast = fast?.next!;
  }

  // iterate till fast is the last node, since there is 'n' spaces between
  // slow and fast and fast is the last node, slow must be n spaces from the last node.
  while (fast?.next !== null) {
    fast = fast?.next!;
    slow = slow?.next!;
  }

  return slow;
}

console.log("\n------fromLast------\n");

const list = new LinkedList();
list.insertLast("a");
list.insertLast("b");
list.insertLast("c");
list.insertLast("d");
console.log(fromLast(list, 2)?.data); // 'b'
