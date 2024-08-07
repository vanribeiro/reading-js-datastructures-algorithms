import BinarySearchTree from ".";

const tree = new BinarySearchTree<number>();

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

    });

});