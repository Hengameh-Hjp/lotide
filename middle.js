
const eqArrays = function (arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
    } else {
      return false;
    } 
  }
  return true;
}



const assertArrayEqual = function(arr1, arr2) {
  if (middle(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 ssertion failed:' ${arr1} !== ${arr2}`);
  }
};




const middle = function(array) {
  let result = [];
  let mid = Math.floor(array.length/2);

  if(array.length === 1 && array.length === 2) {
    result =[];
  } else if(array.length % 2 === 0 && array.length !== 2) {
    result.push(array[mid]);
    result.push(array[mid-1]);
  } else if (array.length % 2 !== 0) {
    result.push(array[mid])
  }
  return result;
}

assertArrayEqual(middle([1, 2, 3, 4, 5]), [3])
