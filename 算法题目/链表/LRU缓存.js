/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.mp = new Map()
    this.x = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.mp.has(key)) {
        this.x.push(key);
        return this.mp.get(key)
    }
    return -1;

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let m = new Map()
    let arr=[]
    if (!this.mp.has(key)) {
        if (this.mp.size == this.capacity) {
            //如果已满，则先删除后插入
            for (let i = this.x.length - 1; i > -1; i--) {
                if (this.mp.has(this.x[i])) {
                    //统计最近的使用记录
                    if (!m.get(this.x[i])) {
                        //排除重复选项
                        arr.push(this.x[i])
                        m.set(this.x[i], 1)
                        if (m.size == this.capacity) {
                            this.mp.delete(this.x[i])
                            x=arr.reverse();
                            break;
                        }
                    }
                }
            }
        }
    }
    this.mp.set(key, value)
    this.x.push(key)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */