const average = function(list){
  let sum = 0;

  for (let  num of list) {
    sum += num;
  }

  return sum / list.length;
}
console.log(average([1,2,3]))