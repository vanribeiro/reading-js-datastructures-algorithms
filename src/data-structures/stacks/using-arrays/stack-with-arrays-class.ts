class Stack {
    items: Array<unknown>;

    constructor() {
        this.items = [];
    }

    push(item: unknown) {
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

    getItems() {
        return this.items;
    }
}

export default Stack;
