function defaultEquals<T>(a: T, b: T): boolean {
    return a === b;
}

const Compare = {
    LESS_THAN_ZERO: -1,
    BIGGER_THAN_ONE: 1,
    EQUALS_TO_ZERO: 0
}

function defaultCompare<T>(a: T, b: T): number {

    if(a === b) return Compare.EQUALS_TO_ZERO;

    return a < b ? Compare.LESS_THAN_ZERO : Compare.BIGGER_THAN_ONE;
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