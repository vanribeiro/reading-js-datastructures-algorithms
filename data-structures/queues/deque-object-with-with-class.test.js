import Deque from './deque-object-with-with-class.js';

const deque = new Deque();

describe('Data Structure: Deque', () => {
    
    test('The queue show should have 1 items', () => {
        deque.addBack('banana');
        expect(deque.size()).toBe(1);
    });

    test('should have 04 items', () => {
        deque.addBack('maçã');
        deque.addBack('uva');
        deque.addBack('laranja');
        expect(deque.size()).toBe(4);
    });

    test('should add 01 new item as a last position', () => {
        deque.addFront('caqui');
        expect(deque.peekFront()).toBe('caqui');
    });

    test('should peek the first item: "caqui"', () => {
        expect(deque.peekFront()).toBe('caqui');
    });

    test('should peek the last item: "laranja"', () => {
        expect(deque.peekBack()).toBe('laranja');
    });

    test('should display the output in string format', () => {
       expect(deque.toString()).toBe('[caqui, banana, maçã, uva, laranja]');
    });

    test('should return false when deque has more than one item', () => {
        expect(deque.isEmpty()).toBe(false);
    });

    test('should remove and return the first item', () => {
        expect(deque.removeFront()).toBe('caqui');
    });

    test('should remove and return the last item', () => {
        expect(deque.removeBack()).toBe('laranja');
    });

    test('should return 0 when the deque is clear', () => {
        deque.clear();
        expect(deque.size()).toBe(0);
    });

    test('should return an empty string', () => {
        expect(deque.toString()).toBe('');
    });

    test('should return undefined when front is peeked and the queue is empty', () => {
        expect(deque.peekFront()).toBeUndefined();
    });

    test('should return undefined when back is peeked and the queue is empty', () => {
        expect(deque.peekBack()).toBeUndefined();
    });

    test('should return undefined when remove an item from back and the queue is empty', () => {
        expect(deque.removeBack()).toBeUndefined();
    });

    test('should add an item in front if the queue is empty', () => {
        expect(deque.isEmpty()).toBeTruthy();
        deque.addFront('tangerina');
        deque.addFront('manga');
        expect(deque.isEmpty()).toBeFalsy();
    });

    test('should add an item in front if the queue is not empty', () => {
        expect(deque.isEmpty()).toBeFalsy();
        deque.removeFront('tangerina');
        deque.addFront('ameixa');
        expect(deque.size()).toBe(2);
    });

});
