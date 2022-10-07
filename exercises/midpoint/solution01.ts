// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

import { Node } from "../linkedlist/node";
import { LinkedList } from "../linkedlist/solution01";

export function midpoint(list: LinkedList<any>): Node<any> | null {
  if (list.isEmpty()) return null;

  let slow = list.head;
  let fast = list.head;

  while (fast!.next !== null && fast!.next.next !== null) {
    slow = slow!.next!;
    fast = fast!.next!.next;
  }

  return slow;
}

const list = new LinkedList();
list.insertLast("a");
list.insertLast("b");
list.insertLast("c");
list.insertLast("d");
list.insertLast("e");

console.log("\n------midpoint------\n");

console.log(midpoint(list)); // returns { data: 'b' }
