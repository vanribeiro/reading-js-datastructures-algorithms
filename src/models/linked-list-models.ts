class Node {

    element: string | number | object;
    next: Node | null;
    
    constructor(element: any) {
        this.element = element;
        this.next = null;
    }
    
}

export default Node;