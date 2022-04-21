let root_1 = [10,5,15,3,7,null,18]
let low_1 = 7
let high_1 = 15

// function TreeNode (val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

function rangeSumBST (root, low, high) {
    let sum = 0;
    
    function callDFS(node) {
        if (!node) {
            return
        }

        if (node.val >= low) {
            console.log('node val : ',node.val, 'node left : ', node.left)
            callDFS(node.left)
        }

        if (node.val >= low && node.val <= high) {
            sum += node.val
        }

        if (node.val <= high) {
            console.log('node val : ',node.val, 'node right : ', node.right)
            callDFS(node.right)
        }
    }

    // console.log(sum)
    callDFS(root)
    console.log(sum)
    return sum
}

rangeSumBST(root_1, low_1, high_1)