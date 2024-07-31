import Set from ".";


describe('Data Structure: Set', () => {
    const setNumbers = new Set();

    it('should add elements to the Set', () => {
        setNumbers.add(1);
        setNumbers.add(2);
        expect(setNumbers.has(1)).toBeTruthy();
        expect(setNumbers.has(2)).toBeTruthy();
    });

    it('should remove one element from the Set', () => {
        setNumbers.delete(1);
        expect(setNumbers.has(1)).toBeFalsy();
    });

    it('should return false when try to remove one element is not in the Set', () => {
        expect(setNumbers.delete(100)).toBeFalsy();
    });

    it('should check if an element exists in the Set', () => {
        expect(setNumbers.has(2)).toBeTruthy();
    });

    it('should return the size of the Set - ECMA 2015+', () => {
        setNumbers.add(3);
        setNumbers.add(4);
        expect(setNumbers.size()).toBe(3);
    });

    it('should return the size of the Set - sizeLegacy() method', () => {
        setNumbers.add(5);
        expect(setNumbers.sizeLegacy()).toBe(4);
    });

    it('should return the values of the Set - ECMA 2017+', () => {
        expect(setNumbers.values()).toEqual([2, 3, 4, 5]);
    });

    it('should return the values of the Set - valuesLegacy() method', () => {
        expect(setNumbers.valuesLegacy()).toEqual(["2", "3", "4", "5"]);
    });

    it('should clear the Set', () => {
        setNumbers.clear();
        expect(setNumbers.size()).toBe(0);
    });
    
});

describe('Operation between sets', () => {
    const setA = new Set();
    const setB = new Set();
    const setC = new Set();
    
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
        const unionSets = setA.union(setB);
        expect(unionSets.values()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should perform intersection operation on two Sets: A and B', () => {
        const intersectionSets = setA.intersection(setB);
        expect(intersectionSets.values()).toEqual([2, 3]);
    });

    it('should perform intersection operation on two Sets: B and A', () => {
        const intersectionSets = setB.intersection(setA);
        expect(intersectionSets.values()).toEqual([2, 3]);
    });

    it('should perform difference operation on two Sets: A - B', () => {
        const differenceSets = setA.difference(setB);
        expect(differenceSets.values()).toEqual([1]);
    });

    it('should perform difference operation on two Sets: B - A', () => {
        const differenceSets = setB.difference(setA);
        expect(differenceSets.values()).toEqual([4, 5, 6]);
    });

    it('should perform isSubsetOf operation on a Set: C is subset of A', () => {
        const subset = setC.isSubsetOf(setA);
        expect(subset).toBeTruthy();
    });

    it('should perform isSubsetOf operation on a Set: A is not subset of B', () => {
        const subset = setA.isSubsetOf(setB);
        expect(subset).toBeFalsy();
    });

    it('should perform isSubsetOf operation on a Set: A is not subset of C', () => {
        const subset = setA.isSubsetOf(setC);
        expect(subset).toBeFalsy();
    });
});