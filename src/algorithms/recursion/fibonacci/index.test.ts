import { fibonacciInterative, fibonacciMemoization, fibonacciRecursive } from ".";


describe('Functions: Fibonacci Sequence', () => {

    describe('Iterative', () => {

        it('should calculate 8th number sequence',() => {
            expect(fibonacciInterative(8)).toBe(21);
        });

        it('should calculate 1 = 1',() => {
            expect(fibonacciInterative(1)).toBe(1);
        });

        it('should calculate 2 = 1',() => {
            expect(fibonacciInterative(2)).toBe(1);
        });

        it('should return 0 when input is lesser than 1',() => {
            expect(fibonacciInterative(0)).toBe(0);
            expect(fibonacciInterative(-10)).toBe(0);
        });

    });

    describe('Recursive', () => {

        it('should calculate 8th sequence number',() => {
            expect(fibonacciRecursive(8)).toBe(21);
        });

        it('should return 1 when input is 1',() => {
            expect(fibonacciRecursive(1)).toBe(1);
        });

        it('should return 1 when input is 2',() => {
            expect(fibonacciRecursive(2)).toBe(1);
        });

        it('should return 0 when input is 0',() => {
            expect(fibonacciRecursive(0)).toBe(0);
        });

        it('should return 0 when input is negative',() => {
            expect(fibonacciRecursive(-10)).toBe(0);
        });

    });

    describe('Memoization', () => {

        it('should calculate 8th sequence number',() => {
            expect(fibonacciMemoization(8)).toBe(21);
        });

        it('should return 1 when input is 1',() => {
            expect(fibonacciMemoization(1)).toBe(1);
        });

        it('should return 1 when input is 2',() => {
            expect(fibonacciMemoization(2)).toBe(1);
        });

        it('should return 0 when input is 0',() => {
            expect(fibonacciMemoization(0)).toBe(0);
        });

        it('should return 0 when input is negative',() => {
            expect(fibonacciMemoization(-10)).toBe(0);
        });

    });

});