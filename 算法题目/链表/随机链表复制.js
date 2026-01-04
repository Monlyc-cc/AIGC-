/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    let node_head = new _Node()
    let node1 = node_head;
    let nodeMq_random = new Map()
    let nodeMq = new Map()
    while (head) {
        let { val, next, random } = head;
        let node = new _Node(val, next, random)
        nodeMq.set(head, node)//记录下被复制的节点
        if (nodeMq.has(random)) {
            //如果随机节点已经被复制
            //则node.random指向新的节点
            node.random = nodeMq.get(random);
        }
        else {
            //否则记录下 random与node的依赖，等到random被复制时再补全依赖
            if (random) {
                if (nodeMq_random.has(random)) {
                    nodeMq_random.get(random).push(node);
                }
                else {
                    nodeMq_random.set(random, [node]);
                }
            }
        }
        if (nodeMq_random.has(head)) {
            //如果该节点已经被前方节点依赖 ，则重新需要补全，前方节点对该节点的依赖关系
            let x = nodeMq_random.get(head)
            for (let i of x) {
                i.random = node;
            }
        }

        node1.next = node;
        node1 = node1.next;
        head = head.next
    }
    return node_head.next;
};
