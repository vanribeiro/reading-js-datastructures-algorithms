import IStack from "../../../../interfaces/IStack";
import { Element, IndexNumber } from "../../../../types/data-structures";

class Stack implements IStack {        
    #count: number = 0;
    #items: IndexNumber = {};

    push(item: Element): void {
        this.#items[this.#count] = item;
        this.#count++;
    }

    pop(): Element | undefined {
        if(this.isEmpty()) return undefined;
        this.#count--;
        const result = this.#items[this.#count];
        delete this.#items[this.#count]
        return result;
    }

    peek(): Element | undefined {
        if(this.isEmpty()) return undefined;
        return this.#items[this.#count - 1];
    }

    isEmpty(): boolean  {
        return this.#count === 0;
    }

    clear(): void {
        this.#items = {};
        this.#count = 0;
    }

    size (): number  {
        return this.#count;
    }

    toString(): string  {
        if(this.isEmpty()) return '';
        let objString = `${this.#items[0]}`;
        for (let index = 1; index < this.#count; index++) {
            objString = `${objString}, ${this.#items[index]}`;
        }
        return objString;
    }

    get items(): IndexNumber {
        return this.#items;
    }

}

export default Stack;
