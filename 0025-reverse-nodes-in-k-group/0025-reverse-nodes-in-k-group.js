
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let prevGroup = dummy;

    while (true) {
        // Find the kth node
        let kth = prevGroup;

        for (let i = 0; i < k && kth !== null; i++) {
            kth = kth.next;
        }

        // If fewer than k nodes remain
        if (kth === null) {
            break;
        }

        let nextGroup = kth.next;

        // Reverse the current group
        let prev = nextGroup;
        let curr = prevGroup.next;

        while (curr !== nextGroup) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        // Connect the reversed group
        let temp = prevGroup.next;
        prevGroup.next = kth;
        prevGroup = temp;
    }

    return dummy.next;
};
