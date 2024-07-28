class Node {

    element: any;
    next: any;
    
    constructor(
        element: any,  
        next: any = null  
    ) {
        this.element = element;
        this.next = next;
    }
    
}

export default Node;