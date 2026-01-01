//
// 挑选出符合条件的节点
// 加入right链表
// 切断right尾部与原链表的联系


var deleteDuplicates = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let right = new ListNode(-100);
    let right_head = right;
    let left = head;
    while (left.next) {
        while (left.val == left.next.val) {
            left = left.next;
        }
        left = left.next;

    }

    return right_head.next;

};
// 