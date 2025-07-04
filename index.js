
// 1. Triangle minimum path sum
// function triangleMinSum(triangle) {
//   let sum = 0;
//   for (let i = 0; i < triangle.length; i++) {
//     sum += triangle[i][0];
//   }
//   return sum;
// }

// console.log(triangleMinSum([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); // 11

// 2. Sort and separate numbers and other types
// function separateTypes(arr) {
//   const numbers = arr.filter(v => typeof v === 'number').sort((a, b) => a - b);
//   const others = arr.filter(v => typeof v !== 'number');
//   return { numbers, others };
// }

// console.log(separateTypes([1, null, 4, false, 33, 44, 2, true]));

// 3. Sort and split by type into different arrays
// function splitByTypes(arr) {
//   const typeMap = {};
//   for (let item of arr) {
//     const type = typeof item;
//     if (!typeMap[type]) typeMap[type] = [];
//     typeMap[type].push(item);
//   }
//   if (typeMap['number']) typeMap['number'].sort((a, b) => a - b);
//   return typeMap;
// }

// console.log(splitByTypes([1, null, 4, false, 33, 44, 2, true]));

// 4. Return types of each element in array
// function getTypes(arr) {
//   return arr.map(v => typeof v);
// }

// console.log(getTypes([1, null, 4, false, 33, 44]));
// [ 'number', 'object', 'number', 'boolean', 'number', 'number' ]

//HOME WORK

// // 1. Eng yaqin qo‘shni elementlar yig‘indisi R ga yaqin bo‘lishi kerak
// function closestPair(arr, R) {
//     let minDiff = Infinity;
//     let result = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         let sum = arr[i] + arr[i + 1];
//         let diff = Math.abs(sum - R);
//         if (diff < minDiff) {
//             minDiff = diff;
//             result = [arr[i], arr[i + 1]];
//         }
//     }
//     return result;
// }

// console.log(closestPair([21, 43, 11, 45, 4, 32, 54], 35)); // [4, 32]

// // 2. Har bir juft sonni birinchi uchragan juft songa orttirish
// function incrementEvens(arr) {
//     let result = [...arr];
//     for (let i = 0; i < result.length; i++) {
//         if (result[i] % 2 === 0) {
//             for (let j = 0; j < result.length; j++) {
//                 if (result[j] % 2 === 0) {
//                     result[i] += result[j];
//                     break;
//                 }
//             }
//         }
//     }
//     return result;
// }

// console.log(incrementEvens([1, 4, 5, 2, 33, 1, 8, 22])); // [1, 8, 5, 6, 33, 1, 12, 26]

// // 3. Har bir toq sonni oxirgi toq songa orttirish
// function incrementOdds(arr) {
//     let result = [...arr];
//     let lastOdd = result.slice().reverse().find(x => x % 2 !== 0);
//     return result.map(x => x % 2 !== 0 ? x + lastOdd : x);
// }

// console.log(incrementOdds([2, 55, 2, 21, 44, 3])); // [58, 24, 6]

// // 4. Eng katta va eng kichik element o‘rnini almashtirish
// function swapMinMax(arr) {
//     let result = [...arr];
//     let minIdx = result.indexOf(Math.min(...result));
//     let maxIdx = result.indexOf(Math.max(...result));
//     [result[minIdx], result[maxIdx]] = [result[maxIdx], result[minIdx]];
//     return result;
// }

// console.log(swapMinMax([23, 43, 12, 56, 64])); // [23, 43, 64, 56, 12]

// // 5. Eng katta va eng kichik orasini nolga tenglash
// function zeroBetweenMinMax(arr) {
//     let result = [...arr];
//     let minIdx = result.indexOf(Math.min(...result));
//     let maxIdx = result.indexOf(Math.max(...result));
//     if (minIdx > maxIdx) [minIdx, maxIdx] = [maxIdx, minIdx];
//     for (let i = minIdx + 1; i < maxIdx; i++) {
//         result[i] = 0;
//     }
//     return result;
// }

// console.log(zeroBetweenMinMax([2, 54, 4, 11, 1, 34, 11])); // [2, 54, 0, 0, 1, 34, 11]

// // 6. Eng katta va eng kichik orasini teskari chiqarish
// function reverseBetweenMinMax(arr) {
//     let result = [...arr];
//     let minIdx = result.indexOf(Math.min(...result));
//     let maxIdx = result.indexOf(Math.max(...result));
//     if (minIdx > maxIdx) [minIdx, maxIdx] = [maxIdx, minIdx];
//     let middle = result.slice(minIdx, maxIdx + 1).reverse();
//     return [...result.slice(0, minIdx), ...middle, ...result.slice(maxIdx + 1)];
// }

// console.log(reverseBetweenMinMax([2, 54, 4, 11, 1, 34, 11])); // [2, 54, 11, 4, 1, 34, 11]

// // 7. Indexsi k ga teng bo‘lgan elementni o‘chirish
// function removeNumber(arr, k) {
//     return arr.filter((_, i) => i !== k);
// }

// console.log(removeNumber([54, 23, 65, 12], 1)); // [54, 65, 12]

// // 8. Bir xil qo‘shni elementlarni o‘chirish
// function removeDuplicate(arr) {
//     return arr.filter((x, i) => i === 0 || x !== arr[i - 1]);
// }

// console.log(removeDuplicate([12, 43, 23, 54, 12, 23])); // [12, 43, 23, 54, 12, 23]

// // 9. 3 martadan kam uchraganlarni o‘chirish
// function threeElements(arr) {
//     let count = arr.reduce((acc, val) => {
//         acc[val] = (acc[val] || 0) + 1;
//         return acc;
//     }, {});
//     return arr.filter(x => count[x] >= 3);
// }

// console.log(threeElements([12, 12, 44, 54, 44, 44, 2, 22, 2, 2])); // [44, 2]

// // 10 Juft elementlarning indeksini yig‘ish

// function arrayIndexSum(arr){
//     let sum = arr.reduce((total, val, idx) => val % 2 === 0 ? total + idx : total, 0);
//     return sum
// } 

// console.log(arrayIndexSum([2, 43, 53, 23, 22, 53, 88, 10])); // 0 + 4 + 6 + 7 = 17
