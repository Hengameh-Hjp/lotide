


const countLetters = function(str) {
  let obj = {};
  let cleanedString = str.split('');
  for (var letter of cleanedString) {
    if(letter in obj) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
}






console.log(countLetters('LHL'));