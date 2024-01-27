//637. Average of Levels in Binary Tree

//Given the root of a binary tree, return the average value of the nodes on each
//level in the form of an array. Answers within 10-5 of the actual answer
//will be accepted.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//Basic Plan:
//Level by level would be breadth first search/queue.
//will likely want an array of arrays, with level = index,
// so [[root], [root.left, root.right]]
//Alternatively, could use an object {0: [root], 1: [root.left, root.right]}

//To keep track of level, could include along with node in the queue, so
//queue = [[root, 0]], and queue.push([root.left, currLevel+1])

function calcAverageLevels(root){

  let queue = [[root, 0]];
  let levelValues = [];
  while (queue.length){
    let [cnode, clevel] = queue.shift();

    if (cnode === null) continue;
    if (levelValues[clevel] === undefined) levelValues[clevel] = [];

    levelValues[clevel].push(cnode.val);
    queue.push([cnode.left, clevel+1]);
    queue.push([cnode.right, clevel+1]);
  }

  //Now calculate average
  let levelAvgs = levelValues.map(lvl => {
    return lvl.reduce((acc, val) => acc + val, 0)/lvl.length;
  });
  return levelAvgs;
}