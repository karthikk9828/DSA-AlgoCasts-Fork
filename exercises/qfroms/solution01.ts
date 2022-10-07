// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

import { Stack } from "../stack/solution01";

class QueueFromStack<T> {
  private mainStack: Stack<T>;
  private helperStack: Stack<T>;

  constructor() {
    this.mainStack = new Stack<T>();
    this.helperStack = new Stack<T>();
  }

  public add(value: T): void {
    while (!this.mainStack.isEmpty()) {
      this.helperStack.push(this.mainStack.pop()!);
    }
    this.mainStack.push(value);
    while (!this.helperStack.isEmpty()) {
      this.mainStack.push(this.helperStack.pop()!);
    }
  }

  public remove(): T | undefined {
    return this.mainStack.pop();
  }

  public peek(): T | undefined {
    return this.mainStack.peek();
  }

  public print() {
    this.mainStack.print();
  }
}

const q = new QueueFromStack<number>();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
q.add(5);
q.print();
console.log(q.peek()); // returns 1
console.log(q.remove()); // returns 1
console.log(q.remove()); // returns 2
q.print();

module.exports = QueueFromStack;
