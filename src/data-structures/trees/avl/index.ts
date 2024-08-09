import Node from "../../../models/trees/Node";
import { defaultCompare } from "../../../utils";
import BinarySearchTree from "../binary-search-tree/using-classes";
import BalanceFactor from "./balance-factor";

class AVLTree<K> extends BinarySearchTree<K> {
    compareFn: Function;
    root: Node<K> | null;
    
    constructor(compareFn = defaultCompare){
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    getNodeHeight(node: Node<K> | null | undefined): number{
        if(node == null) return -1;
        return Math.max(
            this.getNodeHeight(node.left), 
            this.getNodeHeight(node.right)
        ) + 1;
    }

    getBanlanceFactor(node: Node<K> | null): number {
        const heightDifference = this.getNodeHeight(node?.left) - this.getNodeHeight(node?.right);
        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1: 
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2: 
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }

}

export default AVLTree;