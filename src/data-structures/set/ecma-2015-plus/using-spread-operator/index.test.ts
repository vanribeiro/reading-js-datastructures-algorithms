import setOperation from ".";
import { Element } from "../../../../types/data-structures";

describe('ES2015+ - Native Set: Operation between sets', () => {

    const { difference, intersection, union, allSetValues } = setOperation();

    const setA: Set<Element> = new Set();
    const setB: Set<Element> = new Set();
    
    setA.add(1);
    setA.add(2);
    setA.add(3);

    setB.add(2);
    setB.add(3);
    setB.add(4);

    it('should perform union operation on two Sets', () => {
        const unionSets = allSetValues(union(setA, setB));
        expect(unionSets).toEqual([1, 2, 3, 4]);
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
        expect(differenceSets).toEqual([4]);
    });

});