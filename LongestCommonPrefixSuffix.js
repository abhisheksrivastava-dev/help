/**
 * @param {string[]} strs
 * @return {string}
 */
// for finding prefix
var longestCommonPrefix = function(strs) {
  strs.sort();
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
  }
  return strs[0];
};

// for finding Suffix
var longestCommonSuffix = function(strs) {
  strs.sort();
  for (let i = strs[0].length-1; ~i; i--) {
    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(i+1, strs[0].length-1);
  }
  return strs[0];
};

console.log(longestCommonSuffix(["fleower", "sheower", "leower"]));
