import { describe, expect, test } from '@jest/globals';
import LinkedList from "./linked-lists-with-class";

const linkedList = new LinkedList();

describe('Data Structure: Linked List', () => {

    test('should return if the list is empty', () => {
        expect(linkedList.isEmpty()).toBeTruthy();
    });

    test('should return the number of items in the list with a value equal to zero', () => {
        expect(linkedList.size()).toBe(0);
    });
    
    test('should add one new item in the final of the list', () => {
        linkedList.push('banana');
    });

    test('should return the number of items in the list with a value equal to one', () => {
        expect(linkedList.size()).toBe(1);
    });

    test('should return if the list is empty', () => {
        expect(linkedList.isEmpty()).toBeFalsy();
    });

    test('should insert an element in a specific position in the list', () => {
        linkedList.insertElementAt('caqui', 3);
    });

    test('should return a specific element in the list', () => {
        expect(linkedList.getElementAt(0)).toBe('banana');
    });

    test('should return undefined when an element isn\'t in the list', () => {
        expect(linkedList.getElementAt(5)).toBeUndefined();
    });



});