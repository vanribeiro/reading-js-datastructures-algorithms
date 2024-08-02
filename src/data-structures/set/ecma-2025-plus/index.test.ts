import setOperationEcma2025 from ".";
import { Element } from "../../../types/data-structures";

describe('ES2015 - Native Set: Operation between sets', () => {

    const { 
        difference,
        intersection,
        isSubsetOf,
        union,
        valuesList,
        isDisjointFrom,
        isSupersetOf,
        symmetricDifference
    } = setOperationEcma2025();

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
        const unionSets = valuesList(union(setA, setB));
        expect(unionSets).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should perform intersection operation on two Sets: A and B', () => {
        const intersectionSets = valuesList(intersection(setA, setB));
        expect(intersectionSets).toEqual([2, 3]);
    });

    it('should perform intersection operation on two Sets: B and A', () => {
        const intersectionSets = valuesList(intersection(setA, setB));
        expect(intersectionSets).toEqual([2, 3]);
    });

    it('should perform difference operation on two Sets: A - B', () => {
        const differenceSets = valuesList(difference(setA, setB));
        expect(differenceSets).toEqual([1]);
    });

    it('should perform difference operation on two Sets: B - A', () => {
        const differenceSets = valuesList(difference(setB, setA));
        expect(differenceSets).toEqual([4, 5, 6]);
    });

    it('should perform symmetricDifference operation on a Set: A and C', () => {
        const subset = valuesList(symmetricDifference(setA, setC));
        expect(subset).toEqual([1]);
    });

    it('should perform symmetricDifference operation on a Set: A and B', () => {
        const subset = valuesList(symmetricDifference(setA, setB));
        expect(subset).toEqual([1, 4, 5, 6]);
    });

    it('should perform symmetricDifference operation on a Set: B and A', () => {
        const subset = valuesList(symmetricDifference(setB, setA));
        expect(subset).toEqual([4, 5, 6, 1]);
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

    it('should perform isSupersetOf operation on a Set: A is not superset of B', () => {
        const subset = isSupersetOf(setA, setB);
        expect(subset).toBeFalsy();
    });

    it('should perform isSupersetOf operation on a Set: B is superset of C', () => {
        const subset = isSupersetOf(setA, setC);
        expect(subset).toBeTruthy();
    });

    it('should perform isSupersetOf operation on a Set: C is not superset of B', () => {
        const subset = isSupersetOf(setC, setB);
        expect(subset).toBeFalsy();
    });

    it('should perform isDisjointFrom operation on a Set: A has no element in common with B', () => {
        const subset = isDisjointFrom(setA, setB);
        expect(subset).toBeFalsy();
    });

    it('should perform isDisjointFrom operation on a Set: A has no element in common with B', () => {
        const subset = isDisjointFrom(setA, setC);
        expect(subset).toBeFalsy();
    });




});