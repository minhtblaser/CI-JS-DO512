// //bt1
// function distanceToNearestVowel (str){
//     let vowelIndex = [];
//     let ans = [];
//     let vi= 0;

//     for (let i = 0; i< str.length; i++){
//         if (isVowel(str[i])){
//             vowelIndex.push(i);
            
//         }
//     }

//     for (let i = 0; i< str.length; i++) {
//         let disOne = Math.abs(vowelIndex[vi] - i);
//         let disTwo = Math.abs(vowelIndex[vi + 1] - i);
//         if (!disTwo && disTwo != 0){
//             ans[i] = disOne;
//             } else if (disOne < disTwo) {
//                 ans[i] = disOne;
//             } else {
//                 ans[i] = disTwo;
//                 vi++;
//             }
//         }
//     return ans;
// }

// let isVowel= (letter) =>{
//     if (letter === 'a' || letter === 'e' || letter === "i" || 
//         letter === "o" || letter === 'u') {
//         return true;
//     }
//     return false;
// }
// //add data to function
// //test case
// console.log(distanceToNearestVowel("aaaaa"));
// console.log(distanceToNearestVowel("babbb"));
// console.log(distanceToNearestVowel"abcdabcd"));
// console.log(distanceToNearestVowel("shopper"));
// ----------------------------------
//bt4
// message = Halp! Morse code is driving me nuts!
// var message = ".... .- .-.. .--. -·-·--     -- --- .-. ... .     -.-. --- -.. .     .. ...     -.. .-. .. ...- .. -. --.     -- .     -. ..- - ... -·-·--"; 
// var alphabet = {  
//    "-----":"0",
//    ".----":"1",
//    "..---":"2",
//    "...--":"3",
//    "....-":"4",
//    ".....":"5",
//    "-....":"6",
//    "--...":"7",
//    "---..":"8",
//    "----.":"9",
//    ".-":"a",
//    "-...":"b",
//    "-.-.":"c",
//    "-..":"d",
//    ".":"e",
//    "..-.":"f",
//    "--.":"g",
//    "....":"h",
//    "..":"i",
//    ".---":"j",
//    "-.-":"k",
//    ".-..":"l",
//    "--":"m",
//    "-.":"n",
//    "---":"o",
//    ".--.":"p",
//    "--.-":"q",
//    ".-.":"r",
//    "...":"s",
//    "-":"t",
//    "..-":"u",
//    "...-":"v",
//    ".--":"w",
//    "-..-":"x",
//    "-.--":"y",
//    "--..":"z",
//    "/":" ",
//    "-·-·--":"!",
//    "·-·-·-":".",
//    "--··--":","
// };
// var messageConverted = [];

// message.split("   ").map(function (word) {
//     word.split(" ").map(function (letter) {
//         messageConverted.push(alphabet[letter]);
//     });
//     messageConverted.push(" ");
// });
 
// console.log(messageConverted.join(""));

// -----------------------------
//bt3
// function JunctionOrSelf (number) {
//     let flag = false;
//     let sum;
//     //check
//     for (let i = 1; i < number; i++){
//         //divide number into parts and calculate sum
//         sum = i;
//         let temp = i;
//         while (temp != 0){
//             sum += parseInt(temp%10);
//             temp =  parseInt(temp/10);
//         }
//         if (parseInt(sum) == parseInt(number)) {
//             //check number is junction
//             flag = true;
//             break;
//         }
//     }
//     return flag;
// }

// function main (){
//     let number = Number(prompt("enter a number"))
//     if (JunctionOrSelf(number)){
//         console.log(`${number} is a junction number`)
//     } else {
//         console.log (`${number} is a self number`)
//     }
// }

// main ();
//----------------------------------
// bt5
// function PictureFrame(row, column){
//     let pattern = " ";
//     for (let i = 1; i <= row; i++){
//         for(let j = 1; j <= column; j++){
//         if(i==1 || i==row || j==1 || j==column){
//             pattern +="*"+ " "
//             } else {
//             pattern += "\n";
//         }
//           console.log(pattern)
//         }
//     }
// }
          

// function main (){
//     let row =4; 
//     let column = 10;
//     PictureFrame(row, column);    
// }
// main()
// ----------
//bt2
// function oddSquarePatch(inputarr) {
//     let array =inputarr
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i].map(x => {
//             if (x % 2 == 0) {
//                 return x = 0
//             }
//             else {
//                 return x = 1
//             }
//         })
//     }
//     let count = 0
//     let arrcheckj = []
//     let flagroot = true
//     while (flagroot) {
//         let flagcheck = false
//         for (let i = 0; i < array.length; i++) {
//             array[i] = array[i].map(x => {
//                 if (x == 1) {
//                     return flagcheck = true
//                 }
//             })
//         }
//         if (flagcheck) {
//             count++
//             flagcheck = false
//         }
//         else break

//         for (i = 0; i < array.length - 1; i++) {
//             for (let j = 0; j < array[i].length - 1; j++) {
//                 if (array[i][j] == 1 && array[i][j + 1] == 1 && array[i + 1][j] == 1 && array[i + 1][j + 1] == 1) {
//                     arrcheckj.push(1)
//                 }
//                 else arrcheckj.push(0)
//             }
//             array[i] = arrcheckj
//             arrcheckj = []
//             // console.log(arrcheckj)
//         }
//         array.splice(array.length - 1, 1)
//     }
//     console.log(count)

// }