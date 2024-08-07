function defaultEquals<T>(a: T, b: T): boolean {
    return a === b;
}

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
}

function defaultCompare<T>(a: T, b: T): number {

    if(a === b) return Compare.EQUALS;

    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function defaultToString<T>(item: T): string {
    if(item === null) {
        return 'NULL';
    } 

    if(item === undefined) {
        return 'UNDEFINED';
    }

    if(typeof item === 'string' || item instanceof String){
        return `${item}`;
    }

    return item.toString();
}

export {
    defaultEquals,
    defaultCompare,
    defaultToString,
    Compare,
}