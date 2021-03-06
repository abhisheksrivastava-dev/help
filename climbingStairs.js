/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    /**
     * Fibonacci Series
     * Recursion
      if(n === 1) {
        return 1;
    } else if(n === 2) {
        return 2;
    } else {
        return climbStairs(n-1) + climbStairs(n-2);
    }
    */
    let prev = 0;
    let cur = 1;
    let temp;
    
    for (let i = 0; i < n; i++) {
        temp = prev;
        prev = cur;
        cur += temp; 
    }
    return cur;
};
