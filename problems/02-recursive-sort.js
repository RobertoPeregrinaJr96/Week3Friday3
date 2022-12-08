/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

*/


const sort = (nums, arr = []) => {
    if (!nums.length) return arr // base case
    let max = 0 // what we are comparing
    let i = 0   // our count for the loop
    let j = 0   // where we are pointing to in the indices
    while (i < nums.length  ) {   // looping through nums array
        if (max < nums[i]) {    // conditional to see what is the biggest number
            max = nums[i]   // reassigning max to whatever is greater then it
            j = nums.indexOf(max) // moves our pointer to the indices
        }
        i++
    }
    nums.splice(j, 1)
    arr.unshift(max)
    return sort(nums, arr)
}

console.log(sort([])) // prints []
console.log(sort([9])) // prints [9]
console.log(sort([5, 6, 4, 3, 7, 2, 1])) // prints [1, 2, 3, 4, 5]
console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}
