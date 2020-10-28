const eqObjects = function(obj1, obj2) {
  if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for(var key in obj1) {
    if(!Array.isArray(obj1[key])) {
      if(obj1[key] !== obj2[key]) {
        return false;
      }
    } else {
      let result = eqArrays(obj1[key], obj2[key]);
      if(result === false) {
        return false;
      }
    } 
  }
  return true;
}





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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)) // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc))


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)) // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2))