interface IBinarySearchTree<K> {
    insert(key: K): void;
    search(key: K): boolean;
    inOrderTraverse(callback: Function): void;
    preOrderTraverse(callback: Function): void;
    postOrderTraverse(callback: Function): void;
    min(): number;
    max(): number;
    remove(key: K): boolean;
}

export default IBinarySearchTree;