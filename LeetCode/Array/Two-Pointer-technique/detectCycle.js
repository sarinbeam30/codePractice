function detectCycle(head) {
    let fast = (slow = head)

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        if (fast === slow) {
            return true
        }
    }

    return false
}

function Node(val) {
    this.data = val
    this.next = null
}

const parent = new Node(1)
const child = new Node(2)
parent.next = child
child.next = parent

console.log(detectCycle(parent))