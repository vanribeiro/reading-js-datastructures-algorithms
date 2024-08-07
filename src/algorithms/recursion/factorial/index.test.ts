import { factorialIterative, factorialRecursive } from ".";

describe('Functions: Factorial', () => {

    describe('Iterative', () => {

        it('should calculate 5! = 120',() => {
            expect(factorialIterative(5)).toBe(120);
        });

        it('should calculate 1! = 1',() => {
            expect(factorialIterative(1)).toBe(1);
        });

        it('should calculate 0! = 1',() => {
            expect(factorialIterative(0)).toBe(1);
        });

        it('should return undefined when input is negative',() => {
            expect(factorialIterative(-10)).toBeUndefined();
        });

    });

    describe('Recursive', () => {

        it('should calculate 5! = 120',() => {
            expect(factorialRecursive(5)).toBe(120);
        });

        it('should calculate 1! = 1',() => {
            expect(factorialRecursive(1)).toBe(1);
        });

        it('should calculate 0! = 1',() => {
            expect(factorialRecursive(0)).toBe(1);
        });

        it('should return undefined when input is negative',() => {
            expect(() => factorialRecursive(-10)).toThrow();
        });

    });

});