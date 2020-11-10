// bt1
// function disemvowel(string) {

//     let vowels = {
//       'a': true,
//       'e': true,
//       'i': true,
//       'o': true,
//       'u': true,
//       'U': true,
//       'A': true,
//       'E': true,
//       'I': true,
//       'O': true,
//     };
  
//     let result = "";
//     let Uppercase;
//     let newString;
  
//     for (let i = 0; i < string.length; i++) {
//       let letter = string[i];
//       if (!vowels[letter]) {
//         result += string[i];       
//         Uppercase = result.toUpperCase();
//         newString = Uppercase.split(" ").join("");
//       }
//     };
//     return newString;
//   };
// //test case
// console.log(disemvowel(" Iam haltqtowh fowhfowfhwo"));
// -------------------
// bt3

// const sum = a => a.reduce((a, e) => a + e);
// const diag = m => m.map((row, i) => row[i]);
// const rotate = m => 
//   m.map((_, i) => m.map((_, j) => m[j][i]).reverse())
// ;
// const isMagic = square => {
//   const targetSum = square.length && sum(square[0]);
//   const valid = a => sum(a) === targetSum;
//   const rotated = rotate(square);  
//   const flat = square.flat();
//   return new Set(flat).size === flat.length &&
//     square.every(valid) &&
//     rotated.every(valid) &&
//     valid(diag(square)) &&
//     valid(diag(rotated))
// };

// [
    ////test case is here
//   [
//     [2,5,6],
//     [9,5,1],
//     [4,3,8]
//   ],
//   [
//     [8,1,6],
//     [3,5,7],
//     [4,9,2]
//   ],
// ].forEach(e => console.log(isMagic(e)));
// ------------------------------
// bt5
// const numberOfBoomerangs = function(points) {
//     let result = 0,
//         length = points.length;
//     const getDistance = (point1, point2) => {
//       return Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2);
//     }
//     for (let i = 0; i < length; i++) {
//       let map = new Map();
//       for (let j = 0; j < length; j++) {
//         if (i === j) continue;
//         let distance = getDistance(points[i], points[j])
//         map.set(distance, (map.get(distance) || 0) + 1)
//       }
//       map.forEach( (value) => { result += value * (value - 1) })
//     }
//     return result;
//   };
// //test case
// console.log(numberOfBoomerangs([[1,0],[0,0],[2,0]]));
//---------------
// ----------------------------
// bt2

// function isSelfDescribing(num) {
//     if (num.toString().length % 2 != 0)
//     { return console.log("Odd quantity of digits, it can't be splitted") }
//     let array = []
//     for (let i = num.toString().length - 1; i > -1; i--) {
//         let numsplit
//         numsplit = num % 10
//         array.splice(0, 0, numsplit)
//         num = Math.floor(num / 10)
//     }
//     let count = 1
//     let objCount = {}
//     let flag = false
//     for (i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (objCount[array[i]] == undefined) {
//                 if (array[i] == array[j]) {
//                     count++
//                     flag = true
//                 }
//             }
//         }
//         if (flag) {
//             objCount[array[i]] = count
//         }
//         count = 1
//         flag = false
//     }
//     let check = true
//     for (i = 0; i < array.length; i += 2) {
//         if (objCount[array[i + 1]] == undefined) {
//             if (array[i] != 1) { check = false }
//         }
//         else {
//             if (objCount[array[i + 1]] != array[i]) {
//                 check = false
//             }
//         }
//     }
//     if (check) { console.log(true) }
//     else console.log(false)
// }
// //test case//
// isSelfDescribing (333)