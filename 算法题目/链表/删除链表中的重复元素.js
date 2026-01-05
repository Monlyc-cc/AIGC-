var deleteDuplicates = function (head) {
    let list = head;
    if (head) {
        while (head.next) {
            if (head.next.val == head.val) {
                head.next = head.next.next;
            }
            else {
                head = head.next;
            }
        }
    }
    return list;
};