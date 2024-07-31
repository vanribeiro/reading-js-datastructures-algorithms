import { SetElement as Element } from "../types/data-structures";

interface ISet {
    add(element: Element): boolean;
    delete(element: Element): boolean;
    has(element: Element): boolean;
    clear(): void;
    size(): number;
    values(): Array<Element>;
}

export default ISet;