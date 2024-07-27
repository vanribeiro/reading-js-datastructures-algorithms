import { IndexNumber } from "../../../../types/data-structures.js";

class Deque {
    count: number;
    items: IndexNumber;
    lowestCount: number;

    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    addBack(item: number | string): void {
        this.items[this.count] = item;
        this.count++;
    }

    addFront(item: number | string): void {
        if (this.isEmpty()) {
            this.addBack(item);
        } else if(this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = item;
        } else {
            for (let index = this.count; index > 0; --index) {
                this.items[index] = this.items[index - 1];
            }
            
            this.count++;
            this.lowestCount = 0;
            this.items[0] = item;
        }
    }

    removeBack(): string | number | object {
        if(this.isEmpty()) return undefined;
        this.count--;
        const value = this.items[this.count];
        delete this.items[this.count];
        return value;
    }

    removeFront(): string | number | object {
        const value = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return value;
    }


    peekBack(): string | number | object {
        if(this.isEmpty()) return undefined;
        return this.items[this.count - 1];
    }

    peekFront(): string | number | object{
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }

    clear(): void {
        this.items = [];
        this.count = 0;
        this.lowestCount = 0;
    }

    size(): number {
        return this.count;
    }

    isEmpty(): boolean {
        return this.count - this.lowestCount === 0;
    }

    toString(): string {
        if(this.isEmpty()) return '';
        let objString = `${this.items[this.lowestCount]}`;
        for (let index = this.lowestCount + 1; index < this.count; index++) {
            objString = `${objString}, ${this.items[index]}`;
        }
        return `[${objString}]`;
    }

}

export default Deque;

