class Queue {
    constructor() {
        this.count = 0;
        this.items = {};
        this.lowestCount = 0;
    }

    enqueue(item) {
        this.items[this.count] = item;
        this.count++;
    }

    dequeue(){
        const value = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return value;
    }

    peek() {
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }

    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    size () {
        return this.count - this.lowestCount;
    }

    toString() {
        if(this.isEmpty()) return '';
        let objString = `${this.items[this.lowestCount]}`;
        for (let index = this.lowestCount + 1; index < this.count; index++) {
            objString = `${objString}, ${this.items[index]}`;
        }
        return `[${objString}]`;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(`items: ${JSON.stringify(queue.items)}`);
console.log(`dequeue: ${queue.dequeue()}`);
console.log(`items: ${JSON.stringify(queue.items)}`);
console.log(`peek: ${queue.peek()}`);
console.log(`isEmpty: ${queue.isEmpty()}`);
console.log(`size: ${queue.size()}`);
console.log(`toString: ${queue.toString()}`);
queue.clear();
console.log(`items: ${JSON.stringify(queue.items)}`);
