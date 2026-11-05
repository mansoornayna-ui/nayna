var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let current = dummy;

    while (current.next && current.next.next) {
        let first = current.next;
        let second = current.next.next;

        // Swap nodes
        first.next = second.next;
        second.next = first;
        current.next = second;

        // Move to the next pair
        current = first;
    }

    return dummy.next;
};