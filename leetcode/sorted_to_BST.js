//Given an integer array nums where the elements are sorted in ascending order,
//convert it to a height-balanced binary search tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


//Rules for BST:
//children given a node, children of node are 2n+1 and 2n+2.
//For a BST, left children are < parent, right children > parent.

//For heaps, can often have helper functions to set new root/reshuffle back down.
//Binary search tree is stricter though, may make more sense to just go element by
//element?

//Unsure if it makes more sense to go from max/min, or start at root of BST.
//For element by element, tricky part is that it's not obvious what depth
//the next item in sorted list should go to.

//If going by root, could try a recursive approach: Ie, root is midpoint of overall,
//left child is midpoint of left half, right child of right half. Then can skip
//the gnarly depth calculations.




//First attempt: using slice
function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;

  const mid = Math.floor(nums.length/2);
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0,mid));
  root.right = sortedArrayToBST(nums.slice(mid+1));
  return root;
};



//Follow up:
//Other solutions focused on a pointer approach. Idea being that
//slice is O(n), so avoiding this should speed things up.

var sortedArrayToBST = function(nums, left = 0, right = nums.length) {
  if (left >= right) return null;

  const mid = Math.floor((left+right)/2);
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums, left, mid);
  root.right = sortedArrayToBST(nums, mid+1, right);
  return root;
};



// //Initially, tried to build BST as array. In the future, good to read the instructions...
// function buildBST(nums){
//   const BST = Array(nums.length).fill(null);


//   function fillBST(subSorted, parent=0){
//     if (subSorted.length === 1) return subSorted[0];
//     if (subSorted.length === 0) return null;

//     const mid = Math.floor(subSorted.length/2);
//     BST[parent] = subSorted[mid];
//     const left = parent*2 + 1;
//     const right = parent*2 + 2;
//     BST[left] = fillBST(subSorted.slice(0,mid), left);
//     BST[right] = fillBST(subSorted.slice(mid+1), right);
//   }
//   fillBST(nums);

//   return BST;
// }