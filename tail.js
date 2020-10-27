const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ssertion failed:' ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let arr2;
  arr2 = arr.slice(1, arr.length);
  return arr2;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);