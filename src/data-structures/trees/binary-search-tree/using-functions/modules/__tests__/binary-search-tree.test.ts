import { BinarySearchTree } from "../binary-search-tree";

const tree = BinarySearchTree();

const orderValues: Array<number> = [];

const orderCallback = (value: number): Array<number> => {
    orderValues.push(value);
    return orderValues;
}

const clearArray = (array: Array<unknown>) => array.length = 0;

describe('Data Structure: Binary Search Tree', () => {
    
    describe('when it is empty', () => {
        
        it('should return root as undefined', () => {
            const root = tree.getRoot()?.key;
            expect(root).toBeUndefined();
        });

        it('should return left as undefined', () => {
            const root = tree.getRoot()?.left;
            expect(root).toBeUndefined();
        });

        it('should return right as undefined', () => {
            const root = tree.getRoot()?.right;
            expect(root).toBeUndefined();
        });

        it('should remove the root', () => {
            const result = tree.remove(null as any);
            expect(result).toBeUndefined();
        });

        it('should remove the left and right', () => {
            const result = tree.remove(null as any);
            expect(result).toBeUndefined();
        });

    });

    describe('when it is populated', () => {

        it('should return insert value in root', () => {
            tree.insert(11);
            const root = tree.getRoot()?.key
            expect(root).toBe(11);
        });

        it('should insert values in tree', () => {
            tree.insert(7);
            tree.insert(15);
            tree.insert(5);
            tree.insert(3);
            tree.insert(9);
            tree.insert(8);
            tree.insert(10);
            tree.insert(13);
            tree.insert(12);
            tree.insert(14);
            tree.insert(20);
            tree.insert(18);
            tree.insert(25);
            tree.insert(6);
        });
        
        it('should perform tree in-order', () => {
            tree.inOrderTraverse(orderCallback);
            expect(orderValues).toEqual([3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25]);
        });

        it('should perform tree pre-order', () => {
            clearArray(orderValues)
            tree.preOrderTraverse(orderCallback);
            expect(orderValues).toStrictEqual([11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]);
        });

        it('should perform tree post-order', () => {
            clearArray(orderValues)
            tree.postOrderTraverse(orderCallback);
            expect(orderValues).toEqual([3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11]);
        });

        it('should return the minimum value in tree', () => {
            const expectedValue = 3;
            const MIN_VALUE = tree.min()?.key;
            expect(MIN_VALUE).toBe(expectedValue);
        });

        it('should return the maximum value in tree', () => {
            const expectedValue = 25;
            const MAX_VALUE = tree.max()?.key;
            expect(MAX_VALUE).toBe(expectedValue);
        });

        it('should return true if 25 is found', () => {
            const result = tree.search(25);
            expect(result).toBeTruthy();
        });

        it('should return false if 100 is NOT found', () => {
            const result = tree.search(100);
            expect(result).toBeFalsy();
        });

        it('should remove a leaf: key[6]', () => {
            tree.remove(6);
            const result = tree.search(6);
            expect(result).toBeFalsy();
        });

        it('should remove the node key[5] with left child or right child', () => {
            tree.remove(5);
            expect(tree.search(5)).toBeFalsy();

            expect(tree.search(3)).toBeTruthy();
            expect(tree.search(7)).toBeTruthy();
        });

        it('should remove the node key[15] with left child and right child', () => {
            tree.remove(15);
            expect(tree.search(15)).toBeFalsy();

            expect(tree.search(18)).toBeTruthy();
            expect(tree.search(20)).toBeTruthy();
            expect(tree.search(25)).toBeTruthy();
        });

        it('should remove the node key[7] with left child and right child', () => {
            tree.remove(7);
            expect(tree.search(7)).toBeFalsy();

            expect(tree.search(3)).toBeTruthy();
            expect(tree.search(9)).toBeTruthy();
        });

        it('should remove the node leaf: key[8] with no children', () => {
            tree.remove(8);
            expect(tree.search(8)).toBeFalsy();

            expect(tree.search(9)).toBeTruthy();
            expect(tree.search(10)).toBeTruthy();
        });

    });

});