import chalk from 'chalk';
import { BinarySearchTree } from "./modules/binary-search-tree";
import { blackBright, cyan, red, whiteBright, yellow } from '../../../../utils';

const tree = BinarySearchTree();
const print = console.log;

tree.insert(11);
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

const clearArray = (array: Array<number>): void => {
    array.length = 0;
}

const result: number[] = [];
const returnTreeNodes = (key: number) => result.push(key);

print(chalk.bold.bgGreen('Tree - using functions'));

print(yellow('\nOrdering:'));

print(cyan('\nIn Order: '));
tree.inOrderTraverse(returnTreeNodes);
print(result.join(', '));
clearArray(result);

print(cyan('\nPre Order: '));
tree.preOrderTraverse(returnTreeNodes);
print(result.join(', '));
clearArray(result);

print(cyan('\nPost Order: '));
tree.postOrderTraverse(returnTreeNodes);
print(result.join(', '));
clearArray(result);

print(yellow('\nSearching values in a tree\n'));

print(cyan(' - min value =>'), tree.min()?.key);
print(cyan(' - max value =>'), tree.max()?.key);

print(whiteBright('\nSpecific value:'));

print(cyan(' - value'), 5, cyan('exists in current tree?'), '=>', tree.search(5)); // true
print(cyan(' - value'), 0, cyan('exists in current tree?'), '=>', tree.search(0)); // false
print(cyan(' - value'), -5, cyan('exists in current tree?'), '=>', tree.search(-5)); // false

print(blackBright('\nAfter insert new value:', -5));
print(cyan(' - value'), -5, cyan('exists in current tree?'), '=>', tree.search(-5)); // true

print(yellow('\nRemove a value from a tree'));

print(blackBright('\nAdding new values:', whiteBright([-5, 0, 100].join(', '))));

tree.insert(-5);
tree.insert(0);
tree.insert(100);

print(blackBright('\nChecking if the new values were added:'));

print(cyan(' - value'), -5, cyan('exists in current tree?'), '=>', tree.search(-5)); // true
print(cyan(' - value'), 0, cyan('exists in current tree?'), '=>', tree.search(0)); // true
print(cyan(' - value'), 100, cyan('exists in current tree?'), '=>', tree.search(100)); // true

print(blackBright('\nRemoving the values:', red([-5, 0, 100].join(', '))));

print(blackBright('\nChecking if the values were really removed:'));

print(cyan(' - value:'), -5, cyan('still exists in current tree?'), '=>', tree.search(-5)); // false
print(cyan(' - value:'), 0, cyan('still exists in current tree?'), '=>', tree.search(0)); // false
print(cyan(' - value:'), 100, cyan('still exists in current tree?'), '=>', tree.search(100)); // false
