import StackLinkedList from ".";

const stackLinkedList = new StackLinkedList();

describe('Data Structure: StackLinkedList', () => {

    describe('when the stack is empty', () => {
        
        it('should return true', () => {
            expect(stackLinkedList.isEmpty()).toBeTruthy();
        });

        it('should return 0 when size() method is called', () => {
            expect(stackLinkedList.size()).toBe(0);
        });

        it('should return an empty string when toString() method is called', () => {
            expect(stackLinkedList.toString()).toBe('');
        });

        it('should return undefined when pop() method is called', () => {
            expect(stackLinkedList.pop()).toBeUndefined();
        });

        it('should return undefined when peek() method is called', () => {
            expect(stackLinkedList.peek()).toBeUndefined();
        });
    });

    describe('when the stack is being populated', () => {
        
        it('should add an item in base stack base', () => {
            stackLinkedList.push(3);
            expect(stackLinkedList.peek()).toBe(3);
        });

        it('should return 03 as size of this stack', () => {
            stackLinkedList.push(2);
            stackLinkedList.push(1);
            expect(stackLinkedList.size()).toBe(3);
        });

        it('should return \"3, 2, 1\" as the content stack', () => {
            expect(stackLinkedList.toString()).toBe('3, 2, 1');
        });

        it('should return 01 for the element that is on top of the stack', () => {
            expect(stackLinkedList.peek()).toBe(1);
        });

    });

    describe('when the stack need to be clear', () => {
        
        it('should remove the element in the top of the stack and return it', () => {
            expect(stackLinkedList.pop()).toBe(1);
        });

        it('should remove all elements in the stack and its size should be 0', () => {
            stackLinkedList.clear();
            expect(stackLinkedList.size()).toBe(0);
        });

    });

});