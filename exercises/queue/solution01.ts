// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

export class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  public add(value: T): void {
    this.items.unshift(value);
  }

  public remove(): T | undefined {
    return this.items.pop();
  }

  public peek(): T | undefined {
    if (this.items.length <= 0) return undefined;
    return this.items[this.items.length - 1];
  }

  public print() {
    console.log(this.items);
  }
}

// const queue = new Queue<number>();
// queue.add(1);
// queue.add(2);
// queue.add(3);
// queue.print();
// queue.remove();
// queue.print();

// module.exports = Queue;
