import { Element } from "../../../../types/data-structures";

function setOperation () {

    const allSetValues = (set: Set<Element>) => {
        const setValues: Array<Element> = [];
        for (const iterator of set) {
            setValues.push(iterator);
        }

        return setValues;
    }

    const union = (setA: Set<Element>, setB: Set<Element>): Set<Element> => {
        const unionAb: Set<Element> = new Set();
        setA.forEach((value: Element) => unionAb.add(value));
        setB.forEach((value: Element) => unionAb.add(value));
        return unionAb;
    }

    const intersection = (setA: Set<Element>, setB: Set<Element>): Set<Element> => {
        const intersectionSet: Set<Element> = new Set();
        setA.forEach((value: Element) => {
            if(setB.has(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }

    const difference = (setA: Set<Element>, setB: Set<Element>): Set<Element> => {
        const differenceSet: Set<Element> = new Set();
        setA.forEach((value: Element) => {
            if(!setB.has(value)){
                differenceSet.add(value);
            }
        });

        return differenceSet;
    }

    const isSubsetOf = (setA: Set<Element>, setB: Set<Element>): boolean => {
        if(setA.size > setB.size){
            return false;
        }

        for (const iterator of setA) {
            if(!setB.has(iterator)){
                return false;
            }
        }

        return true;
    }

    return {
        union,
        difference,
        isSubsetOf,
        intersection,
        allSetValues
    }
}

export default setOperation;
