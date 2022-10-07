// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

import { Node } from "./node";

export class LinkedList<T> {
  head: Node<T> | null;

  constructor(head: Node<T> | null = null) {
    this.head = head;
  }

  insertFirst(data: T) {
    const node = new Node<T>(data);
    const currentHead = this.head;
    node.next = currentHead;
    this.head = node;

    // or pass current node as the next ref for the new node
    // const node = new Node<T>(data, this.head);
    // this.head = node;
  }

  size(): number {
    let size = 0;
    let start = this.head;

    while (start != null) {
      size++;
      start = start.next;
    }

    return size;
  }

  isEmpty(): boolean {
    return this.getFirst() === null;
  }

  getFirst(): Node<T> | null {
    return this.head;
  }

  getLast(): Node<T> | null {
    let current = this.head;
    let lastNode: Node<T> | null = null;
    while (current != null) {
      lastNode = current;
      current = current.next;
    }

    return lastNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst(): void {
    if (this.isEmpty()) return;
    this.head = this.head!.next;
  }

  removeLast(): void {
    let current = this.head;
    while (current?.next?.next !== null) {
      current = current?.next!;
    }
    current.next = null;
  }

  insertLast(data: T): void {
    let node = new Node<T>(data);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let lastNode = this.getLast();
      lastNode!.next = node;
    }
  }

  getAt(index: number): Node<T> | null {
    let node = this.head;
    let counter = 0;

    while (node !== null) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node?.next;
    }

    return null;
  }

  removeAt(index: number): void {
    if (this.isEmpty()) return;

    if (index === 0) {
      // remove head
      this.head = this.head?.next?.next!;
      return;
    }

    let previous = this.getAt(index - 1);
    if (previous === null || previous.next == null) return;

    previous.next = previous.next.next;
  }

  insertAt(data: T, index: number): void {
    let node = new Node<T>(data);

    if (this.isEmpty()) {
      this.head = node;
      return;
    }

    if (index === 0) {
      const currentHead = this.head;
      node.next = currentHead;
      this.head = node;
      return;
    }

    let previous = this.getAt(index - 1) || this.getLast();
    node.next = previous!.next!;
    previous!.next = node;
  }

  forEach(callback: (node: Node<T>, index: number) => void): void {
    let start = this.head;
    let counter = 0;

    while (start != null) {
      callback(start, counter);
      start = start.next;
      counter++;
    }
  }
}

const list = new LinkedList<string>();

console.log(list.size()); // 0
console.log(list.getFirst()); // null
console.log(list.getLast()); // null

list.insertFirst("Hi There"); // List has one node
console.log(list);

console.log(list.size()); // 1

list.insertFirst("hello"); // List has two nodes
console.log(list);

console.log(list.size()); // 2

list.insertFirst("what"); // List has three nodes
console.log(list);

console.log(list.size()); // 3

console.log("\n-----------\n");

console.log(list.getFirst());

console.log(list.getLast());

console.log("\n-----------\n");

list.removeFirst();
console.log(list);

console.log("\n-----------\n");

list.removeLast();
console.log(list.getLast());
console.log(list);

console.log("\n------getLast------\n");

list.insertLast("Last node");
console.log(list.getLast());
console.log(list);

console.log("\n-----getAt------\n");

console.log(list.getAt(0));
console.log(list.getAt(1));
console.log(list.getAt(2));
console.log(list.getAt(10));

console.log("\n-----removeAt------\n");

list.removeAt(1);
console.log(list);

console.log("\n-----forEach------\n");

list.forEach((node, index) => {
  console.log(`${index} : ${node.data}`);
});

console.log("\n------clear-----\n");

list.clear();
console.log(list);
console.log(list.size());
