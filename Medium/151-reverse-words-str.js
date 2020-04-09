// https://leetcode.com/problems/reverse-words-in-a-string/
var reverseWords = function (s) {
  // let arr = s.trim().split(/\s+/).reverse().join(' ') // too easy
  let arr = s.trim().split(/\s+/)
  for (i = 0; i < arr.length/2; i++) {
    console.log('i:', i);
    let temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
  }
  return arr.join(' ')
};
console.log(reverseWords('  the huge sky  is bright   blue   '));
// done