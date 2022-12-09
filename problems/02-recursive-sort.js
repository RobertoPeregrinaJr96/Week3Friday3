/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

*/


const sort = (nums, sorted = [], count = 1) => {

    if (!nums.length) return sorted

    let num = nums[0]
    for (let j = 0; j < count; j++) {
        if (num < sorted[j]) {
            sorted.splice(j, 0, num)
            count++
        } else {
            sorted.push(num)
        }
    }

    // console.log(nums.slice(1))
    // console.log(nums)
    return sort(nums.slice(1), sorted, count)
}

// console.log(sort([])) // prints []
// console.log(sort([9])) // prints [9]
console.log(sort([5, 2, 1, 4, 3])) // prints [1, 2, 3, 4, 5]
// console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}
