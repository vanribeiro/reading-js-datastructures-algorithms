import Node from "../models/trees/Node";

interface IBinarySearchTree<K> {
    insert(key: K): void;
    search(key: K): boolean;
    inOrderTraverse(callback: Function): void;
    preOrderTraverse(callback: Function): void;
    postOrderTraverse(callback: Function): void;
    min(): Node<K> | null | undefined;
    max(): Node<K> | null | undefined;
    remove(key: K): void;
}

export default IBinarySearchTree;