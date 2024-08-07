import IBinarySearchTree from "../../../interfaces/IBinarySearchTree";
import Node from "../../../models/trees/Node";
import { Compare, defaultCompare } from "../../../utils";

class BinarySearchTree<K> implements IBinarySearchTree<K>{

    compareFn: Function;
    root: Node<K> | null;

    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn;
        this.root = null;
    }

    insert(key: K): void {
        if(this.root === null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    insertNode (node: Node<K>, key: K){
        if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if(node.left === null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if(node.right === null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    search(key: K): boolean {
        throw new Error("Method not implemented.");
    }

    inOrderTraverse(callback: Function): void {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node: Node<K> | null, callback: Function): void{
        if(node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    preOrderTraverse(callback: Function): void {
        this.preOrderTraverseNode(this.root, callback);
    }

    preOrderTraverseNode(node: Node<K> | null, callback: Function): void{
        if(node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    postOrderTraverse(callback: Function): void {
        this.postOrderTraverseNode(this.root, callback);
    }

    postOrderTraverseNode(node: Node<K> | null, callback: Function): void{
        if(node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    min(): number {
        throw new Error("Method not implemented.");
    }

    max(): number {
        throw new Error("Method not implemented.");
    }

    remove(key: K): boolean {
        throw new Error("Method not implemented.");
    }

    getRoot (): Node<K> | null | undefined {
        return this.root;
    }

}

export default BinarySearchTree;