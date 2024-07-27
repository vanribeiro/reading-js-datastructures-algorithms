class Queue {

    items: Array<unknown>;

    constructor() {
        this.items = [];
    }

    enqueue(item: unknown): void {
        this.items.push(item);
    }

    dequeue(): unknown  {
        return this.items.shift();
    }

    peek(): unknown {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    clear(): void {
        this.items = [];
    }

    size (): number {
        return this.items.length;
    }

    getItems (): Array<unknown> {
        return this.items;
    }
}

export default Queue;
