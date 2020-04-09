// https://leetcode.com/problems/insert-into-a-binary-search-tree/
var insertIntoBST = function (root, val) {
  function TreeNode(val) {
    this.val = val
    this.left = this.right = null
  }

  if (!root) return null
  let node = root
  while (node) {
    if (val < node.val) {
      if (!node.left) {
        node.left = TreeNode(val)
        return root
      }
      node = node.left
    } else if (val > node.val) {
      if (!node.right) {
        node.right = TreeNode(val)
        return root
      }
      node = node.right
    }
  }
};
// faster recursive method, submitted last year
// var insertIntoBST = function (root, val) {
//   function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
//   }

//   if (!root) return new TreeNode(val)

//   if (val > root.val) {
//     root.right = insertIntoBST(root.right, val);
//   } else {
//     root.left = insertIntoBST(root.left, val);
//   }
//   return root
// }