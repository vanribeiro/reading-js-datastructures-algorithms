import { Element } from "../../../types/data-structures";

function Stack() {
    let items: Array<Element> = [];

    const push = (item: Element): Element | undefined => items.push(item) ;
    const pop = (): Element | undefined => items.pop();
    const peek = (): Element | undefined => items.at(-1);
    const isEmpty = (): boolean => items.length === 0;
    const clear = (): void => {items = []} ;
    const size = (): number => items.length;
    const getItems = (): Array<Element> => items;
    
    return {
        push, pop, peek, getItems,
        isEmpty, clear, size
    }
}

export default Stack;