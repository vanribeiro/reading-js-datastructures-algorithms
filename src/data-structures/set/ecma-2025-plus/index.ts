/**
 * @author Van Ribeiro
 * @description Esses métodos não estão no livro.
 * Eles se encontram em estágio Draft para o ECMA 2025, 
 * na data de escrita deste arquivo.
 * Disclaimer: métodos disponíveis a partir do NodeJS v22.0.0
 */

import { Element } from "../../../types/data-structures";

function setOperationEcma2025() {

    const valuesList = (set: Set<Element>) => {
        const setValues: Array<Element> = [];
        set.forEach(element => setValues.push(element));
        return setValues;
    }
    
    const union = (setA: Set<Element>, setB: Set<Element>): Set<Element> => {
        //@ts-ignore
        return setA.union(setB);
    }

    const intersection = (setA: Set<Element>, setB: Set<Element>): Set<Element> => {
        // @ts-ignore
        return setA.intersection(setB);
    }

    const difference = (setA: Set<Element>, setB: Set<Element>): Set<Element> => {
        //@ts-ignore
        return setA.difference(setB);
    }

    const symmetricDifference = (setA: Set<Element>, setB: Set<Element>): Set<Element> => {
        //@ts-ignore
        return setA.symmetricDifference(setB);
    }

    const isSubsetOf = (setA: Set<Element>, setB: Set<Element>): boolean => {
        //@ts-ignore
        return setA.isSubsetOf(setB);
    }

    const isSupersetOf = (setA: Set<Element>, setB: Set<Element>): boolean => {
        //@ts-ignore
        return setA.isSupersetOf(setB);
    }

    const isDisjointFrom = (setA: Set<Element>, setB: Set<Element>): boolean => {
        //@ts-ignore
        return setA.isDisjointFrom(setB);
    }

    return {
        difference,
        intersection,
        isSubsetOf,
        isSupersetOf,
        isDisjointFrom,
        symmetricDifference,
        valuesList,
        union
    }
}

export default setOperationEcma2025;

const setA = new Set([2, 4, 6, 8]);
const setB = new Set([1, 4, 9]);
const { 
    union, 
    valuesList, 
    difference, 
    intersection, 
    isSubsetOf, 
    isDisjointFrom, 
    isSupersetOf, 
    symmetricDifference
} = setOperationEcma2025();

console.log("A: ", setA);
console.log("B: ", setB);
console.log("---------------------");
console.log("union: [A \u{022C3} B]", valuesList(union(setA, setB)));
console.log("difference [A - B]: ", valuesList(difference(setA, setB)));
console.log("difference [B - A]: ", valuesList(difference(setB, setA)));
console.log("intersection [A \u{022C2} B]: ", valuesList(intersection(setA, setB)));
console.log("symmetricDifference [A \u{2296} B]: ", valuesList(symmetricDifference(setA, setB)));
console.log("symmetricDifference [B \u{2296} A]: ", valuesList(symmetricDifference(setB, setA)));
console.log("A isSubsetOf B: ", isSubsetOf(setA, setB));
console.log("B isSubsetOf A: ", isSubsetOf(setB, setA));
console.log("A isSupersetOf B: ", isSupersetOf(setA, setB));
console.log("B isSupersetOf A: ", isSupersetOf(setB, setA));
console.log("A isDisjointFrom B: ", isDisjointFrom(setA, setB));