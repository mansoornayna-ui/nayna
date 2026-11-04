var mergeKLists = function(lists) {
    if (lists.length === 0) return null;

    let values = [];

    // Extract all values from linked lists
    for (let list of lists) {
        while (list !== null) {
            values.push(list.val);
            list = list.next;
        }
    }

    // Sort all values
    values.sort((a, b) => a - b);

    // Create a new linked list
    let dummy = new ListNode(0);
    let current = dummy;

    for (let value of values) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
};