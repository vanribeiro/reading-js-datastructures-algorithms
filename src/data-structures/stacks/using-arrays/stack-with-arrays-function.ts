function Stack() {
    let items: Array<unknown> = [];

    const push = (item: unknown) => items.push(item);
    const pop = () => items.pop();
    const peek = () => items.at(-1);
    const isEmpty = () => items.length === 0;
    const clear = (): void => {items = []} ;
    const size = () => items.length;
    const getItems = () => items;
    
    return {
        push, pop, peek, getItems,
        isEmpty, clear, size
    }
}

export default Stack;