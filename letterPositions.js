

const letterPositions = function(str) {
  let obj = {};
  let cleanedString = str.split('');
  for (var i = 0; i < str.length; i++) {
    if(cleanedString[i] in obj) {
      obj[cleanedString[i]].push(i);
    } else {
      obj[cleanedString[i]] = [i];
    }
  }
  return obj;
}



const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
    } else {
      return false;
    } 
  }
  return true;
}

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 ssertion failed:' ${arr1} !== ${arr2}`);
  }
};



assertArrayEqual(letterPositions("hello").e, [1]);
console.log(letterPositions('mosenn').n)