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

const without = function(arr1, arr2) {
  let arr3 = [];
  let flag;
  for (let i = 0; i < arr1.length; i++) {
    flag = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        flag = true;
      }
    }
    if (flag === false) {
      arr3.push(arr1[i]);
    }
  }
  return arr3;
}

assertArrayEqual(without([1, 2, 3], [1]), [2, 3])
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])