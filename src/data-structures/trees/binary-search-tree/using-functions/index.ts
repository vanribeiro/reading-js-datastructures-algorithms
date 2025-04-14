import { Node } from "./model/node";
import { NodeBst } from "./model/types";
import { 
    inOrderTraverseNode,
    insertNode,
    postOrderTraverseNode,
    preOrderTraverseNode 
} from "./functions";

export const BinarySearchTree = () => {
    
    let root: NodeBst = null;

    // @audit root node is repeated
    const insert = (key: number | null): void => {
        if(root === null) root = Node(key);
        insertNode(root, key);
    }

    const inOrderTraverse = (callback: Function) => {
        inOrderTraverseNode(root, callback);
    }

    const preOrderTraverse = (callback: Function) => {
        preOrderTraverseNode(root, callback);
    }

    const postOrderTraverse = (callback: Function) => {
        postOrderTraverseNode(root, callback)
    }

    return {
        root,
        insert,
        inOrderTraverse,
        preOrderTraverse,
        postOrderTraverse,
    }
}

const tree = BinarySearchTree();
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


let result = '';
const returnTreeNodes = (key: number) => result += `${key}, `;

console.log('\nIn Order: ');
tree.inOrderTraverse(returnTreeNodes);
console.log(result.trim());
result = '';

console.log('\nPre Order: ');
tree.preOrderTraverse(returnTreeNodes);
console.log(result.trim());
result = '';

console.log('\nPost Order: ');
tree.postOrderTraverse(returnTreeNodes);
console.log(result.trim());
result = '';