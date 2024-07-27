class Stack {        
    #count = 0;
    #items = {};

    push(item){
        this.#items[this.#count] = item;
        this.#count++;
    }

    pop() {
        if(this.isEmpty()) return undefined;
        this.#count--;
        const result = this.#items[this.#count];
        delete this.#items[this.#count]
        return result;
    }

    peek() {
        if(this.isEmpty()) return undefined;
        return this.#items[this.#count - 1];
    }

    isEmpty(){
        return this.#count === 0;
    }

    clear() {
        this.#items = {};
        this.#count = 0;
    }

    size () {
        return this.#count;
    }

    toString() {
        if(this.isEmpty()) return '';
        let objString = `${this.#items[0]}`;
        for (let index = 1; index < this.#count; index++) {
            objString = `${objString}, ${this.#items[index]}`;
        }
        return objString;
    }

    get items () {
        return this.#items;
    }

}

export default Stack;
