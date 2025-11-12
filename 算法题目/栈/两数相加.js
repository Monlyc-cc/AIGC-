function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
//解决负数
var addTwoNumbers = function (l1, l2) {
    let sum;
    let num = 0;
    let l3 = new ListNode(0, null)
    const l4 = l3;
    while (l1 && l2) {
        sum = l1.val + l2.val + num;
        num = 0;
        if (sum > 9) {
            l3.next = new ListNode(sum-10, null);
            num++;
        }
        else {
            l3.next = new ListNode(sum, null);
        }
        l3 = l3.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while (l1 && !l2) {
        sum = l1.val + num;
        num = 0;
        if (sum < 10) {
            l3.next = new ListNode(sum, null)
        }
        else {
            l3.next = new ListNode(sum-10, null)
            num++;
        };
        l1 = l1.next;
        l3 = l3.next;
    }
    while (l2 && !l1) {
        sum = l2.val + num;
        num = 0;
        if (sum < 10) {
            l3.next = new ListNode(sum, null)
        }
        else {
            l3.next = new ListNode(sum - 10, null)
            num++;
        };
        l2 = l2.next;
        l3 = l3.next;
    }
    if (num) {
        l3.next = new ListNode(1, null)
    }
    return l4.next;

};



let l1 = new ListNode(1, new ListNode(6, new ListNode(3, null)))
let l2 = new ListNode(4, new ListNode(5, null))
let l3 = addTwoNumbers(l1, l2)
while (l3) {
    console.log(l3.val)
    l3 = l3.next;
}

