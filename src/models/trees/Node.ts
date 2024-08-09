class Node<K> {
    key: K | null | undefined;
    left: Node<K> | null;
    right: Node<K> | null;

    constructor(key: K){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

export default Node;