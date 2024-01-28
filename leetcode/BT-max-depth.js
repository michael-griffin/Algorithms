// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest
// path from the root node down to the farthest leaf node.

//Basic plan: check each branch recursively
//Figure out how to add 1 for each step 'down'

//What is base case? If hit 'null, null', or if index out of bounds.
function maxDepth(root, ind=0){
  if (ind >= root.length || root[ind] === null) return 0;

  let leftChild = 2*ind + 1;
  let rightChild = 2*ind + 2;

  let leftMax = 1 + maxDepth(root, leftChild);
  let rightMax = 1 + maxDepth(root, rightChild);
  return Math.max(leftMax, rightMax);
}


//root = [3,9,20,null,null,15,7] -> 3
//root = [1,null,2] -> 2
