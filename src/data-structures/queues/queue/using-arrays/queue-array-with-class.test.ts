import { describe, expect, test } from "@jest/globals";
import Queue from "./queue-array-with-class";

const queue = new Queue();

describe('Data Structure: Queue (with class and objects', () => {

    beforeEach(() => {
        queue.clear();
    });

    describe('when the queue is empty ', () => {

        test('should return true', () => {
            expect(queue.isEmpty()).toBeTruthy();
        });

        test('should return an empty array', () => {
            expect(queue.getItems()).toStrictEqual([]);
        });

        test('should return 0', () => {
            expect(queue.size()).toBe(0);
        });

        test('should return undefined', () => {
            expect(queue.peek()).toBeUndefined();
        });

        test('should return undefined', () => {
            expect(queue.dequeue()).toBeUndefined();
        });

    });

    describe('when the queue is being populated', () => {
        
        test('should add one element', () => {            
            queue.enqueue('mimi');
            expect(queue.size()).toBe(1);
        });
        
        test('should three two elements and returns the queue size', () => {
            queue.enqueue('mimi');
            queue.enqueue('max');
            queue.enqueue('dudu');
            expect(queue.size()).toBe(3);
        });

        test('should returns the object [\'mimi\', \'max\', \'dudu\'', () => {
            const expectation = ['mimi', 'max', 'dudu'];
            queue.enqueue('mimi');
            queue.enqueue('max');
            queue.enqueue('dudu');
            expect(queue.getItems()).toStrictEqual(expectation);
        });
        
    });

    describe('when the queue searched', () => {

        test('should return the first element in the queue', () => {
            queue.enqueue('mimi');
            queue.enqueue('max');
            queue.enqueue('dudu');
            expect(queue.peek()).toBe('mimi');
        });

    });
});