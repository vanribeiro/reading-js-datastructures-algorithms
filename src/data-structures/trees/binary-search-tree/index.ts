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

    private insertNode (node: Node<K>, key: K){
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
        return this.searchNode(this.root, key);
    }

    private searchNode(node: Node<K> | null, key: K): boolean{

        if(node === null) return false;

        if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }

    }

    inOrderTraverse(callback: Function): void {
        this.inOrderTraverseNode(this.root, callback);
    }

    private inOrderTraverseNode(node: Node<K> | null, callback: Function): void{
        if(node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    preOrderTraverse(callback: Function): void {
        this.preOrderTraverseNode(this.root, callback);
    }

    private preOrderTraverseNode(node: Node<K> | null, callback: Function): void{
        if(node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    postOrderTraverse(callback: Function): void {
        this.postOrderTraverseNode(this.root, callback);
    }

    private postOrderTraverseNode(node: Node<K> | null, callback: Function): void{
        if(node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    min(): Node<K> | null | undefined {
        return this.minNode(this.root);
    }

    protected minNode(node: Node<K> | null): Node<K> | null | undefined{
        let current: Node<K> | null = node;
        while (current != null &&  current.left != null){
            current = current.left;
        }

        return current;
    }

    max(): Node<K> | null | undefined {
        return this.maxNode(this.root);
    }

    protected maxNode(node: Node<K> | null ): Node<K> | null | undefined {
        let current: Node<K> | null  = node;
        while(current != null && current.right != null){
            current = current.right;
        }

        return current;
    }

    remove(key: K): void {
        this.root = this.removeNode(this.root, key);
    }

    protected removeNode(node: Node<K> | null, key: K | null | undefined): Node<K> | null {
        if(node == null) return null;
        
        if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {

            if(node.left == null && node.right == null) {
                node = null;
                return node;
            }

            if(node.left == null) {
                node = node.right;
                return node;
            } 
            
            if(node.right == null) {
                node = node.left;
                return node;
            } 

            const aux: Node<K> | null | undefined = this.minNode(node.right);
            node.key = aux?.key;
            node.right = this.removeNode(node.right, aux?.key);
            return node;
        }

    }

    getRoot (): Node<K> | null | undefined {
        return this.root;
    }

}

export default BinarySearchTree;