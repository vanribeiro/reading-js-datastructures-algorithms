import Set from ".";

const setNumbers = new Set();

describe('Data Structure: Set', () => {

    it('should add elements to the Set', () => {
        setNumbers.add(1);
        setNumbers.add(2);
        expect(setNumbers.has(1)).toBeTruthy();
        expect(setNumbers.has(2)).toBeTruthy();
    });

    it('should remove elements from the Set', () => {
        setNumbers.delete(1);
        expect(setNumbers.has(1)).toBeFalsy();
    });

    it('should check if an element exists in the Set', () => {
        expect(setNumbers.has(2)).toBeTruthy();
    });

    it.todo('should return the size of the Set - ECMA 2015+');
    it.todo('should return the size of the Set - sizeLegacy() method');

    it('should clear the Set', () => {
        setNumbers.clear();
        expect(setNumbers.size()).toBe(0);
    });
    
    it.todo('should iterate over the elements of the Set');
    it.todo('should perform union, intersection, and difference operations on two Sets');
});