// https://leetcode.com/problems/top-k-frequent-elements/
var topKFrequent = function (nums, k) {
  let map = {}
  nums.forEach(num => map[num] ? map[num]++ : map[num] = 1)
  let sortedKeys = Object.keys(map).sort((a, b) => map[b] - map[a])
  return sortedKeys.slice(0, k);
  // let tuple = []
  // let output = []
  // for (i = 0; i < nums.length; i++) {
  //   if (map[nums[i]]) {
  //     map[nums[i]]++
  //   } else {
  //     map[nums[i]] = 1
  //   }
  // }
  // for (let key in map) {
  //   tuple.push([key, map[key]])
  // }
  // tuple.sort((a, b) => {
  //   if (a[1] > b[1]) return -1
  //   if (a[1] < b[1]) return 1
  //   if (a[1] === b[1]) return 0
  // })
  // for (i = 0; i < k; i++) {
  //   output.push(Number(tuple[i][0]))
  // }
  // return output
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3], 1));
// done faster