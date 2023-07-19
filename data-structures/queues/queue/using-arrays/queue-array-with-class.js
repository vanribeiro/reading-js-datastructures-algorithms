class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue(){
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }

    size () {
        return this.items.length;
    }
}

export default Queue;

// const queue = new Queue();
// console.log(`isEmpty: ${queue.isEmpty()}`);
// queue.enqueue(3)
// queue.enqueue(5);
// queue.enqueue(18);
// queue.enqueue(1);
// console.log(`queue: ${queue.items}`)
// console.log(`isEmpty: ${queue.isEmpty()}`);
// console.log(`size: ${queue.size()}`);
// console.log(`peek: ${queue.peek()}`);
// console.log(`dequeue: ${queue.dequeue()}`);
// queue.clear();
// console.log(`isEmpty: ${queue.isEmpty()}`);