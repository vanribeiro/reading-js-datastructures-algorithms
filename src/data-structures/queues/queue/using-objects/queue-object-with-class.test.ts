import { describe, expect, test } from "@jest/globals";
import Queue from "./queue-object-with-class";

const queue = new Queue();

describe('Data Structure: Queue (with class and objects', () => {

    beforeEach(() => {
        queue.clear();
    });

    describe('when the queue is empty', () => {

        test('should return true', () => {
            expect(queue.isEmpty()).toBeTruthy();
        });

        test('should return an empty string', () => {
            expect(queue.toString()).toBe('');
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

        test('should return an empty array', () => {
            expect(queue.getItems()).toStrictEqual({});
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

        test('should returns the string [\'mimi, max, dudu\']', () => {
            const expectation = '[mimi, max, dudu]';
            queue.enqueue('mimi');
            queue.enqueue('max');
            queue.enqueue('dudu');
            expect(queue.toString()).toBe(expectation);
        });

        test('should returns the object { 0: \'mimi\', 1: \'max\', 2: \'dudu\']', () => {
            const expectation = {0: 'mimi', 1: 'max', 2: 'dudu'};
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

    describe('when element is removed from the queue', () => {
        const populateQueue = () => {
            queue.enqueue('mimi');
            queue.enqueue('max');
            queue.enqueue('dudu');
        }

        test('should return the value when one element is dequeue', () => {
            populateQueue();
            expect(queue.dequeue()).toBe('mimi');
        });

    });
    

});