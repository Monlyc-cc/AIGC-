var removeNthFromEnd = function (head, n) {

    let arr = [];
    let cur = new ListNode()
    if (!head) {
        return cur
    }
    cur.next=head;
    head = cur;

    while (head) {
        arr.push(head)
        head = head.next;
    }
    let node = arr[arr.length - n - 1]
    node.next = node.next.next;

    return cur.next;
};