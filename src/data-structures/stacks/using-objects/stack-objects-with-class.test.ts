import { describe, expect, test } from "@jest/globals";
import Stack from "./stack-objects-with-class";

const stack = new Stack();

describe('Data Structure: Stack (with class and private modifier access)', () => {

    describe('when the stack is empty', () => {
        
        test('should return true', () => {
            expect(stack.isEmpty()).toBeTruthy();
        });

        test('should return 0 when size() method is called', () => {
            expect(stack.size()).toBe(0);
        });

        test('should return an empty string when toString() method is called', () => {
            expect(stack.toString()).toBe('');
        });

        test('should return undefined when pop() method is called', () => {
            expect(stack.pop()).toBeUndefined();
        });

        test('should return undefined when peek() method is called', () => {
            expect(stack.peek()).toBeUndefined();
        });
    });

    describe('when the stack is being populated', () => {
        
        test('should add an item in base stack base', () => {
            stack.push(3);
            expect(stack.peek()).toBe(3);
        });

        test('should return 03 as size of this stack', () => {
            stack.push(2);
            stack.push(1);
            expect(stack.size()).toBe(3);
        });

        test('should return \"3, 2, 1\" as the content stack', () => {
            const stackContent = '3, 2, 1';
            expect(stack.toString()).toBe(stackContent);
        });
        

        test('should return an object {0: 3, 1: 2, 2: 1} as the content stack', () => {
            const stackObject = {
                0: 3, 
                1: 2, 
                2: 1
            };

            expect(stack.items).toStrictEqual(stackObject);
        });

        test('should return 01 for the element that is on top of the stack', () => {
            expect(stack.peek()).toBe(1);
        });

    });

    describe('when the stack need to be clear', () => {
        
        test('should remove the element in the top of the stack and return it', () => {
            expect(stack.pop()).toBe(1);
        });

        test('should remove all elements in the stack and its size should be 0', () => {
            stack.clear();
            expect(stack.size()).toBe(0);
        });

    });

});