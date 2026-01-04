/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let arr = [];
    let node = new ListNode(0, head)
    head = node;
    while (node) {
        arr.push(node);
        node = node.next;
        if (arr.length == 3) {
            arr[0].next = arr[2];
            arr[1].next = arr[2].next;
            arr[2].next = arr[1];
            arr = [arr[1]];
        }
    }
    return head.next;
};