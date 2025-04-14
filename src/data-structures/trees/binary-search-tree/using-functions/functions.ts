import { Compare, defaultCompare } from "../../../../utils";
import { Node } from "./model/node";
import { NodeBst } from "./model/types";

const { LESS_THAN } = Compare;

export const insertNode = (
        node: NodeBst | null | undefined, 
        key: number | null
    ): void => {
        if(defaultCompare(key, node?.key) === LESS_THAN) {
            if (node?.left === null) { 
                node.left = Node(key); 
            }
            else { 
                insertNode(node?.left, key);
            }
        } else {
            if (node?.right === null) { 
                node.right = Node(key); 
            }
            else { 
                insertNode(node?.right, key)
            };
        }
        
    };

export const inOrderTraverseNode = (node: NodeBst, callback: Function) => {
    if(node !== null) {
        inOrderTraverseNode(node?.left, callback);
        callback(node?.key);
        inOrderTraverseNode(node?.right, callback);
    }
}

export const preOrderTraverseNode = (node: NodeBst, callback: Function) => {
    if(node !== null) {
        callback(node?.key);
        preOrderTraverseNode(node?.left, callback);
        preOrderTraverseNode(node?.right, callback);
    }
}

export const postOrderTraverseNode = (node: NodeBst, callback: Function) => {
    if(node !== null) {
        postOrderTraverseNode(node?.left, callback);
        postOrderTraverseNode(node?.right, callback);
        callback(node?.key);
    }
}

export const search = (key: NodeBst, Node: NodeBst): boolean => true;

export const preOrderTraverse = (callback: Function) => {}

export const postOrderTraverse = (callback: Function) => {}

export const min = (): NodeBst | null | undefined => null;

export const max = (): NodeBst | null | undefined => null;

export const remove = (key: NodeBst, Node: NodeBst) => {}