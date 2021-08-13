/**
 * @param {number} x
 * @return {number}
 * Constrain -2power(31) <= x <= 2power(31) - 1
 */
var reverse = function(num) {
    let reversed = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
    return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;      
};
