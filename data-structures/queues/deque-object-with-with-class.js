class Deque {

    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    addBack(item){
        this.items[this.count] = item;
        this.count++;
    }

    addFront(item) {
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

    removeBack(){
        if(this.isEmpty()) return undefined;
        this.count--;
        const value = this.items[this.count];
        delete this.items[this.count];
        return value;
    }

    removeFront(){
        const value = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return value;
    }


    peekBack(){
        if(this.isEmpty()) return undefined;
        return this.items[this.count - 1];
    }

    peekFront(){
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }

    clear() {
        this.items = [];
        this.count = 0;
        this.lowestCount = 0;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    toString() {
        if(this.isEmpty()) return '';
        let objString = `${this.items[this.lowestCount]}`;
        for (let index = this.lowestCount + 1; index < this.count; index++) {
            objString = `${objString}, ${this.items[index]}`;
        }
        return `[${objString}]`;
    }

}

export default Deque;

