var frequencysort = function (s) {
  var lib = {}
  var arr = []
  var output = []
  for (var i = 0; i < s.length; i++) {
    if (lib[s[i]]) {
      lib[s[i]]++
    } else {
      lib[s[i]] = 1
    }
  }
  for (var key in lib) {
    arr.push([key, lib[key]])
  }
  arr.sort((a, b) => {
    if (a[1] > b[1]) return -1
    if (a[1] < b[1]) return 1
    if (a[1] === b[1]) return 0
  })
  // console.log('arr', arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][1] > 1) {
      for (var j = 0; j < arr[i][1]; j++) {
        output.push(arr[i][0])
      }
    } else {
      output.push(arr[i][0])
    }
  }
  return output.join('')
};
console.log(frequencysort('tree'));
// done