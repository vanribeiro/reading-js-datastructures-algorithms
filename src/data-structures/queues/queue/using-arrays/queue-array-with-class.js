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

    getItems () {
        return this.items;
    }
}

export default Queue;
