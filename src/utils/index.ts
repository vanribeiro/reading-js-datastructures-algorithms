import { Element } from "../types/data-structures";

function defaultEquals(a: unknown, b: unknown): boolean {
    return a === b;
}

function defaultCompare(a: Element, b: Element): number {
    const Compare = {
        LESS_THAN: -1,
        BIGGER_THAN: 1,
        EQUALS: 0
    }

    if(a === b) return Compare.EQUALS;

    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export {
    defaultEquals,
    defaultCompare
}