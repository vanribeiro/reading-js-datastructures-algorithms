import { Compare, defaultCompare } from "../../../../../utils/default-functions";
import { Node } from "./model/node";
import { NodeBst } from "./model/types";

const { 
    LESS_THAN_ZERO, 
    BIGGER_THAN_ONE 
} = Compare;

export const insertNode = (
        node: NodeBst | null | undefined, 
        key: number | null
    ): void => {
        if(defaultCompare(key, node?.key) === LESS_THAN_ZERO) {
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

export const searchNode = (node: NodeBst, key: number | null): boolean => {
    if(node === null) return false;
    
    if(defaultCompare(key, node?.key) === LESS_THAN_ZERO) {
        return searchNode(node?.left, key);
    } else if(defaultCompare(key, node?.key) === BIGGER_THAN_ONE){
        return searchNode(node?.right, key);
    }

    return true;
};

export const minNode = (node: NodeBst) => {
    let current = node;
    while (current != null && current?.left != null) {
        current = current?.left;
    }
    return current;
};

export const maxNode = (node: NodeBst) => {
    let current = node;
    while (current != null && current?.right != null) {
        current = current?.right;
    }
    return current;
};

export const removeNode = (
    node: NodeBst | null | undefined, 
    key: number
): NodeBst => {
    if(node === null) return null;
    
    if(defaultCompare(key, node?.key) === LESS_THAN_ZERO && node?.left) {
        node.left = removeNode(node?.left, key);
        return node;
    } else if(defaultCompare(key, node?.key) === BIGGER_THAN_ONE && node?.right) {
        node.right = removeNode(node?.right, key)
        return node;
    } else {

        if(node?.left === null && node?.right == null) {
            node = null;
            return node;
        }

        if(node?.left === null) {
            node = node?.right;
            return node;
        } 
        
        if(node?.right === null) {
            node = node?.left;
            return node;
        } 

        const aux: NodeBst | null | undefined = minNode(node?.right);
        
        if(aux?.key && node) {
            node.key = aux.key;
            node.right = removeNode(node.right, aux?.key);
        }

        return node;
    }

}
