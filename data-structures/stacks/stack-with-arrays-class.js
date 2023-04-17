class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items.at(-1);
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }
}

const stack = new Stack();
console.log(`isEmpty: ${stack.isEmpty()}`);
stack.push(3)
stack.push(5);
stack.push(18);
stack.push(1);
console.log(`isEmpty: ${stack.isEmpty()}`);
console.log(`size: ${stack.size()}`);
console.log(`peek: ${stack.peek()}`);
console.log(`pop: ${stack.pop()}`);
stack.clear();
console.log(`isEmpty: ${stack.isEmpty()}`);