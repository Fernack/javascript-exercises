const treesAreEqual = (binTreeA, binTreeB) => {
    if (!binTreeA && !binTreeB) {
        return true;
     } 
     else if (!binTreeA || !binTreeB) {
        return false;
     } 
     else {
        return treesAreEqual(binTreeA.left, binTreeB.left) && treesAreEqual(binTreeA.right, binTreeB.right);
     }
  }