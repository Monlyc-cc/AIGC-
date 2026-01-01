var deleteDuplicates = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let right = new ListNode(-100);
    let right_head = right;
    let left = head;
    while (left.next) {
        if (left.val == left.next.val) {
            while (left.next && left.val === left.next.val) {
                left = left.next;
            }
            if (left.next) {
                left = left.next
            }
            else {
                right.next = null;

                return right_head.next;
            }
        }
        else {
            right.next = left;
            right = right.next;
            left = left.next;
        }
    }
    if (right.val != -100) {
        if (left.val != right.val) {
            right.next = left;
            right=right.next
        }
    }
    else
    {
        right.next=left;
        right=right.next;
    }
    right.next = null;
    return right_head.next;

};