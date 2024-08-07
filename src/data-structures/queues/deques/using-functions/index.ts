import { Element } from "../../../../types/data-structures";

function Deque() {
    const items: Array<Element> = [];

    const addFront = (item: Element) => items.unshift(item);
    const removeFront = () => items.shift();
    const addBack = (item: Element) => items.push(item);
    const removeBack = () => items.pop();
    const clear = () => items.splice(0, items.length);
    const size = () => items.length;
    const isEmpty = () => items.length === 0;
    const peekFront = () => isEmpty() ? undefined : items[0];
    const peekBack = () => isEmpty() ? undefined : items[items.length - 1];
    const showDeque = () => items.join(', ');

    return {
        addFront, addBack,
        removeBack, removeFront,
        peekBack, peekFront,
        isEmpty, showDeque,
        clear, size
    }
}

export {
    Deque
}
