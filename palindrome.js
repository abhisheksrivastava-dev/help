/**
 *-2power(31) <= x <= 2power(31) - 1
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
    let reversed = parseFloat(num.toString().split('').reverse().join(''))
    if(num === reversed){
        return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? true : false;
    }
    return false;
};
