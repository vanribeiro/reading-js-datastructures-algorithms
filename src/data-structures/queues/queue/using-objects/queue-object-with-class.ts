import { IndexNumber } from "../../../../types/data-structures";

class Queue {
    count: number;
    items: IndexNumber;
    lowestCount: number;

    constructor() {
        this.count = 0;
        this.items = {};
        this.lowestCount = 0;
    }

    enqueue(item: number | string): void {
        this.items[this.count] = item;
        this.count++;
    }

    dequeue():string | number | object {
        const value = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return value;
    }

    peek(): string | number | object | undefined {
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }

    isEmpty(): boolean {
        return this.count - this.lowestCount === 0;
    }

    clear(): void {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    size (): number {
        return this.count - this.lowestCount;
    }

    toString(): string {
        if(this.isEmpty()) return '';
        let objString = `${this.items[this.lowestCount]}`;
        for (let index = this.lowestCount + 1; index < this.count; index++) {
            objString = `${objString}, ${this.items[index]}`;
        }
        return `[${objString}]`;
    }

    getItems(): IndexNumber | object  {
        return this.items;
    }
}

export default Queue;