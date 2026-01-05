/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    while(headA||headB)
    {
        if(headA)
        {
            if(headA.flag)
            {
                return headA;
            }
            headA.flag=true;
            headA=headA.next;
        }
        if(headB)
        {
            if(headB.flag)
            {
                return headB
            }
            headB.flag=true;
            headB=headB.next;
        }
    }
    return null;
};