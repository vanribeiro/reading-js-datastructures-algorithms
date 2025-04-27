import { defaultCompare, defaultEquals, defaultToString } from '../default-functions';

describe('defaultToString', () => {
    it('should return "NULL" for null input', () => {
        expect(defaultToString(null)).toBe('NULL');
    });

    it('should return "UNDEFINED" for undefined input', () => {
        expect(defaultToString(undefined)).toBe('UNDEFINED');
    });

    it('should return the string representation of a string input', () => {
        expect(defaultToString('hello')).toBe('hello');
    });

    it('should return the string representation of a number input', () => {
        expect(defaultToString(123)).toBe('123');
    });

    it('should return the string representation of an object input', () => {
        const obj = { name: 'John', age: 30 };
        expect(defaultToString(obj)).toBe('[object Object]');
    });
});

describe('defaultCompare', () => {
    it('should return -1 when the first argument is less than the second argument', () => {
        expect(defaultCompare(1, 2)).toBe(-1);
        expect(defaultCompare('a', 'b')).toBe(-1);
    });

    it('should return 1 when the first argument is greater than the second argument', () => {
        expect(defaultCompare(2, 1)).toBe(1);
        expect(defaultCompare('b', 'a')).toBe(1);
    });

    it('should return 0 when the first argument is equal to the second argument', () => {
        expect(defaultCompare(1, 1)).toBe(0);
        expect(defaultCompare('a', 'a')).toBe(0);
    });
});

describe('defaultEquals', () => {
    it('should return true when the two arguments are equal', () => {
        expect(defaultEquals(1, 1)).toBe(true);
        expect(defaultEquals('hello', 'hello')).toBe(true);
        expect(defaultEquals(null, null)).toBe(true);
        expect(defaultEquals(undefined, undefined)).toBe(true);
        const obj = { name: 'John', age: 30 };
        expect(defaultEquals(obj, obj)).toBe(true);
    });

    it('should return false when the two arguments are not equal', () => {
        expect(defaultEquals(1, 2)).toBe(false);
        expect(defaultEquals('hello', 'world')).toBe(false);
        expect(defaultEquals(null, undefined)).toBe(false);
        const obj1 = { name: 'John', age: 30 };
        const obj2 = { name: 'John', age: 30 };
        expect(defaultEquals(obj1, obj2)).toBe(false);
    });
});