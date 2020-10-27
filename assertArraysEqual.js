const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 ssertion failed:' ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
    } else {
      return false;
    } 
  }
  return true;
}

assertArrayEqual([1, 2, 3], [1, 2, 3]) // => true
assertArrayEqual([1, 2, 3], [3, 2, 1]) // => false


