import IStack from "../../../../interfaces/IStack";
import { Element } from "../../../../types/data-structures";

class Stack implements IStack {
    items: Array<Element>;

    constructor() {
        this.items = [];
    }

    push(item: Element) {
        this.items.push(item);
    }

    pop(): Element | undefined {
        return this.items.pop();
    }

    peek(): Element | undefined {
        return this.items.at(-1);
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    clear(): void {
        this.items = [];
    }

    size(): number {
        return this.items.length;
    }

    getItems(): Array<Element> {
        return this.items;
    }
}

export default Stack;
