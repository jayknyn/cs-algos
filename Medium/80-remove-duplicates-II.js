// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
      nums.splice(i + 2, 1)
      i--
    }
  }
  return nums.length
};
console.log(removeDuplicates([0,0,0,2,2,2,4]));
// done