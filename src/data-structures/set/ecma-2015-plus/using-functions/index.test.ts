import setOperation from ".";
import { Element } from "../../../../types/data-structures";

describe('ES2015 - Native Set: Operation between sets', () => {

    const { difference, intersection, isSubsetOf, union, allSetValues } = setOperation();

    const setA: Set<Element> = new Set();
    const setB: Set<Element> = new Set();
    const setC: Set<Element> = new Set();
    
    setA.add(1);
    setA.add(2);
    setA.add(3);

    setB.add(2);
    setB.add(3);
    setB.add(4);
    setB.add(5);
    setB.add(6);

    setC.add(2);
    setC.add(3);

    it('should perform union operation on two Sets', () => {
        const unionSets = allSetValues(union(setA, setB));
        expect(unionSets).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should perform intersection operation on two Sets: A and B', () => {
        const intersectionSets = allSetValues(intersection(setA, setB));
        expect(intersectionSets).toEqual([2, 3]);
    });

    it('should perform intersection operation on two Sets: B and A', () => {
        const intersectionSets = allSetValues(intersection(setA, setB));
        expect(intersectionSets).toEqual([2, 3]);
    });

    it('should perform difference operation on two Sets: A - B', () => {
        const differenceSets = allSetValues(difference(setA, setB));
        expect(differenceSets).toEqual([1]);
    });

    it('should perform difference operation on two Sets: B - A', () => {
        const differenceSets = allSetValues(difference(setB, setA));
        expect(differenceSets).toEqual([4, 5, 6]);
    });

    it('should perform isSubsetOf operation on a Set: C is subset of A', () => {
        const subset = isSubsetOf(setC, setA);
        expect(subset).toBeTruthy();
    });

    it('should perform isSubsetOf operation on a Set: A is not subset of B', () => {
        const subset = isSubsetOf(setA, setB);
        expect(subset).toBeFalsy();
    });

    it('should perform isSubsetOf operation on a Set: A is not subset of C', () => {
        const subset = isSubsetOf(setA, setC);
        expect(subset).toBeFalsy();
    });
});