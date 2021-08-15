/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var prev = 0;
    var max = -Number.MAX_VALUE;
    for (var i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        max = Math.max(max, prev);
        console.log("prev ", prev);
        console.log("max ",max)
    }
    return max;
};
