import { IndexNumber } from "../../../types/data-structures";

class Stack {
    count: number;
    items: IndexNumber;

    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(item: number | string | object): void {
        this.items[this.count] = item;
        this.count++;
    }

    pop() {
        if(this.isEmpty()) return undefined;
        this.count--;
        const result: any = this.items[this.count];
        delete this.items[this.count]
        return result;
    }

    peek() {
        if(this.isEmpty()) return undefined;
        return this.items[this.count - 1];
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
        let objString: string = `${this.items[0]}`;
        for (let index = 1; index < this.count; index++) {
            objString = `${objString}, ${this.items[index]}`;
        }
        return objString;
    }

}

export default Stack;
