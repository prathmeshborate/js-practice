class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findIntersectionHashSet(head1, head2) {
    let nodes = new Set();

    let current = head1;
    while (current) {
        nodes.add(current);
        current = current.next;
    }

    current = head2;
    while (current) {
        if (nodes.has(current)) {
            return current.value;
        }
        current = current.next;
    }

    return null; // No intersection found
}

// Example usage:
let head1 = new ListNode(4);
head1.next = new ListNode(5);
head1.next.next = new ListNode(6);
head1.next.next.next = new ListNode(7);

let head2 = new ListNode(10);
head2.next = head1.next.next; // Intersection at node with value 6

console.log(findIntersectionHashSet(head1, head2)); // Output: 6

/*------------------------------------+++++++++++++++++++---------------------------------*/

function findIntersectionTwoPointers(head1, head2) {
    if (!head1 || !head2) return null;

    let p1 = head1;
    let p2 = head2;

    while (p1 !== p2) {
        p1 = p1 ? p1.next : head2;
        p2 = p2 ? p2.next : head1;
    }

    return p1 ? p1.value : null;
}

// Example usage:
console.log(findIntersectionTwoPointers(head1, head2)); // Output: 6