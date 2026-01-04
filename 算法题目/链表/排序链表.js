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
var sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let mq = {};
    let arr = [];

    while (head) {
        if (mq[head.val]) {
            mq[head.val].push(head)
        }
        else {
            mq[head.val] = [head];
            arr.push(head.val)
        }
        head = head.next
    }

    arr = quickSort(arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < mq[arr[i]].length - 1; j++) {
            mq[arr[i]][j].next = mq[arr[i]][j + 1]
        }
        if (i < arr.length - 1) {
            mq[arr[i]].at(-1).next = mq[arr[i + 1]][0]
        }
    }
    mq[arr.at(-1)].at(-1).next = null
    return mq[arr[0]][0]
};
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(Math.random() * arr.length)
    let left = [];
    let right = [];
    for (let i of arr) {
        if (i > arr[mid]) {
            right.push(i)
        } else if (i < arr[mid]) {
            left.push(i)
        }
    }
    return quickSort(left).concat(arr[mid], quickSort(right))
}