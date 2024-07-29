import IQueue from "../../../../interfaces/IQueue";
import { Element } from "../../../../types/data-structures";

class Queue implements IQueue {

    items: Array<Element>;

    constructor() {
        this.items = [];
    }

    enqueue(item: Element): void {
        this.items.push(item);
    }

    dequeue(): Element | undefined {
        return this.items.shift();
    }

    peek(): Element {
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

    getItems (): Array<Element> {
        return this.items;
    }
}

export default Queue;
