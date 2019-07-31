// 1
// function func(array) {
//     let array1 = [];
//     array1 = array.splice(1, array.length - 1)
//     return array1
// }
// console.log(func([6, 1, 2, 3, 4]))

// 2
// function func(arr) {
//     let arr1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             let subArray = func(arr[i])
//             arr1 = arr1.concat(subArray)
//         } else {
//             arr1.push(arr[i])
//         }
//     }
//     return arr1
// }
// console.log(func([1, 2, 3, [1, 2, [4, 6]]]))

// 3
function fun(n) {
    sum = 0;
    while (n > 0 || sum > 9) {
        if (n == 0) {
            n = sum;
        }
        sum = sum + n % 10;
        n = Math.floor(n / 10);
    }
    console.log(sum);
}
console.log(fun(789))






// function steamrollArray(arr) {
//     var flattenedArray = [];

//     // Create function that adds an element if it is not an array.
//     // If it is an array, then loops through it and uses recursion on that array.
//     var flatten = function(arg) {
//         if (!Array.isArray(arg)) {
//             flattenedArray.push(arg);
//         } else {
//             for (var a in arg) {
//                 flatten(arg[a]);
//             }
//         }
//     };

//     // Call the function for each element in the array
//     arr.forEach(flatten);
//     return flattenedArray;
// }

// // test here
// console.log(steamrollArray([1, [2],[3,[[4]]]]));

// 222222222

// function func(arr) {
//     let arr1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             let subArray = func(arr[i])
//             arr1 = arr1.concat(subArray)
//         } else {
//             arr1.push(arr[i])
//         }
//     }
//     return arr1
// }
// console.log(func([1, 2, 3, [1, 2, [4, 6]]]))




// function fun(n) {
//     sum = 0;
//     while (n > 0 || sum > 9) {
//         if (n == 0) {
//             n = sum;
//         }
//         sum = sum + n % 10;
//         n = Math.floor(n / 10);
//     }
//     console.log(sum);
// }
// console.log(fun(123))


// var number = 44;
// var total = number + '';

// while (total.length > 1) {
//     var temp = 0;
//     for (var i = 0; i < total.length; i++) {
//         temp += +total[i];
//     }
//     total = temp + '';
// }

// console.log(total);