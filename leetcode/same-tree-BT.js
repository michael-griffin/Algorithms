//100. Same Tree

// Given the roots of two binary trees p and q, write a function to check if
// they are the same or not.

// Two binary trees are considered the same if they are structurally identical,
// and the nodes have the same value.

//Basic plan
//Could do 2 BFS/DFS to build 1st tree, then 2nd, then compare completed.
//Main downside is it sounds less efficient (couldn't find a mismatch 'early').
//Ideally, want to progress through and be at the same 'spot' for each

function sameTree(p, q){

  let pStack = [p];
  let qStack = [q];

  while (pStack.length && qStack.length){
    let pNode = pStack.pop();
    let qNode = qStack.pop();

    if (pNode === null && qNode === null) continue;

    if (pNode === null && qNode !== null) return false;
    else if (pNode !== null && qNode === null) return false;
    else if (pNode.val !== qNode.val) return false;

    pStack.push(pNode.left, pNode.right);
    qStack.push(qNode.left, qNode.right);
  }

  return true;
}

