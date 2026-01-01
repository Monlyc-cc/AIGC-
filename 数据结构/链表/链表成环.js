/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let mq = new Map();
    if (!head) {
        return null;
    }
    while (head.next) {
        if (mq.has(head)) {
            return mq.get(head)
        }
        else {
            mq.set(head,head);
            head = head.next;
        }
    }
    return null
};