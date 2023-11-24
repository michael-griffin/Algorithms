//Given the root of a Binary Search Tree (BST), return the minimum
//absolute difference between the values of any two different nodes in the tree.

//Brute force for an unordered tree:
//  gather all elements with DFS, sort, compare adjacent.

//But, binary search trees are already ordered.
//Eg.

//         E
//       B   G
//      A D F H

//For above, A only needs to be compared to B, D needs to be compared to B/E.
//Tricky part is D -> E comparison. A depth first search that only compares parents
//to children will miss it.

//In order traversal should work, though that implementation will likely need
//to be recursive.


function getMinimumDifference(treeArr){
  let prev;
  let minDiff = Infinity;

  //In order traversal
  function traverse(currInd){
    if (currInd >= treeArr.length) return;
    if (treeArr[currInd] === null) return;

    const left = currInd*2 + 1;
    const right = currInd*2 + 2;

    traverse(left);

    if (prev){
      minDiff = Math.min(minDiff, (treeArr[currInd] - prev));
    }
    prev = treeArr[currInd];
    traverse(right);
  }
  traverse(0);

  return minDiff;
}



// // Original idea, missed the D -> E comparison.

// function getMinimumDifference(treeArr) {
//   let minDiff = Infinity;

//   //DFS
//   let stack = [0];
//   //Potential shortcut: can exit early if parent/child elements are equal.
//   while(stack.length){
//     let parent = stack.pop();

//     const left = parent*2 + 1;
//     const right = parent*2 + 2;
//     if (left < treeArr.length){
//       minDiff = Math.min(minDiff, Math.abs(treeArr[parent] - treeArr[left]));
//       stack.push(left);
//     }

//     if (right < treeArr.length){
//       minDiff = Math.min(minDiff, Math.abs(treeArr[parent] - treeArr[right]));
//       stack.push(right);
//     }
//   }
//   return minDiff;
// };

