/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) {
        return false;
    }
    while (head.next) {
        if (head.x) {
            return true
        }
        else {
            head.x=1;
            head = head.next;
        }
    }
    return false
};