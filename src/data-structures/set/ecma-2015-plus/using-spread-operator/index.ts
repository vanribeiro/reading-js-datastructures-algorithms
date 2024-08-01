import { Element } from "../../../../types/data-structures";

function setOperationWithSpread () {

    const allSetValues = (set: Set<Element>) => {
        const setValues: Array<Element> = [];
        for (const iterator of set) {
            setValues.push(iterator);
        }

        return setValues;
    }

    const union = (setA: Set<Element>, setB: Set<Element>): Set<Element> => {
        return new Set([...setA, ...setB]);
    }

    const intersection = (setA: Set<Element>, setB: Set<Element>): Set<Element> => {
        return new Set([...setA].filter((value:Element) => setB.has(value)));
    }

    const difference = (setA: Set<Element>, setB: Set<Element>): Set<Element> => {
        return new Set([...setA].filter((value: Element) => !setB.has(value)));
    }

    return{
        allSetValues,
        difference,
        intersection,
        union
    }
}

export default setOperationWithSpread;