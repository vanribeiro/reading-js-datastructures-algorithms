class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(item){
        this.items[this.count] = item;
        this.count++;
    }

    pop() {
        if(this.isEmpty()) return undefined;
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count]
        return result;
    }

    peek() {
        if(this.isEmpty()) return undefined;
        this.count--;
        return this.items[this.count];
    }

    isEmpty(){
        return this.count === 0;
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    size () {
        return this.count;
    }

    toString() {
        if(this.isEmpty()) return '';
        let objString = `${this.items[0]}`;
        for (let index = 1; index <= this.count; index++) {
            objString = `${objString}, ${this.items[index]}`;
        }
        return objString;
    }

}

const stack = new Stack();
stack.push(3);
stack.push(1);
stack.push(2);
console.log(`stack: ${JSON.stringify(stack.items)}`);
console.log(`size: ${stack.size()}`);
console.log(`isEmpty: ${stack.isEmpty()}`);
console.log(`pop: ${stack.pop()}`);
console.log(`stack: ${JSON.stringify(stack.items)}`);
console.log(`peek: ${stack.peek()}`);
console.log(`toString: ${stack.toString()}`);
stack.clear();
console.log(`stack: ${JSON.stringify(stack.items)}`);

