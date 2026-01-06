/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.mq = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.mq.has(key)) {
        let value = this.mq.get(key)
        this.mq.delete(key)
        this.mq.set(key, value)
        return this.mq.get(key)
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.mq.has(key)) {
        this.mq.delete(key);
    }
    else {
        if (this.mq.size == this.capacity) {
            this.mq.delete(this.mq.keys().next().value)
        }
    }
    this.mq.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
