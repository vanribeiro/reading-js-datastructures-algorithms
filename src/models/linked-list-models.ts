class Node {

    element: string | number | object;
    next: Node | null;
    
    constructor(element: string | number | object) {
        this.element = element;
        this.next = null;
    }
    
}

export default Node;