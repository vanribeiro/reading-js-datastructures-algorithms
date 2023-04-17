function Stack() {
    let items = [];

    const push = (item) => items.push(item);
    const pop = () => items.pop();
    const peek = () => items.at(-1);
    const isEmpty = () => items.length === 0;
    const clear = () => items = [] ;
    const size = () => items.length;
    
    return {
        push, pop, peek, 
        isEmpty, clear, size
    }
}

const stack = Stack();
console.log(`isEmpty: ${stack.isEmpty()}`);
stack.push(3)
stack.push(5);
stack.push(18);
stack.push(1);
console.log(`isEmpty: ${stack.isEmpty()}`);
console.log(`size: ${stack.size()}`);
console.log(`peek: ${stack.peek()}`);
console.log(`pop: ${stack.pop()}`);
stack.clear();
console.log(`isEmpty: ${stack.isEmpty()}`);