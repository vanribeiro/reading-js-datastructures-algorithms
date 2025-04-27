import { Node } from "./model/node";
import { NodeBst } from "./model/types";
import { 
    inOrderTraverseNode,
    insertNode,
    maxNode,
    minNode,
    postOrderTraverseNode,
    preOrderTraverseNode, 
    removeNode, 
    searchNode
} from "./functions";

export const BinarySearchTree = () => {
    
    let root: NodeBst = null;

    const insert = (key: number | null): void => {
        if(root === null) {
            root = Node(key);
        } else {
            insertNode(root, key);
        }
    }

    const min = () => minNode(root);
    const max = () => maxNode(root);
    const search = (key: number) => searchNode(root, key);

    const remove = (key: number) => {
        root = removeNode(root, key);
    };
    
    const inOrderTraverse = (callback: Function) => {
        inOrderTraverseNode(root, callback);
    }

    const preOrderTraverse = (callback: Function) => {
        preOrderTraverseNode(root, callback);
    }

    const postOrderTraverse = (callback: Function) => {
        postOrderTraverseNode(root, callback)
    }

    const getRoot = () => root;

    return {
        root, remove,
        min, max, search,
        insert, getRoot,
        inOrderTraverse,
        preOrderTraverse,
        postOrderTraverse,
    }
}
