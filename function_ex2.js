// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

// let myArray = function (array) {
//   let total = 0;
//   for (i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   let average = total / array.length;
//   console.log(average);
// };
// myArray([0, 50]);

let myArray = function (array) {
  let total = 0;
  for (let num of array) {
    total += num;
  }
  return total / array.length;
};
myArray([0, 50]);
console.log(myArray([0, 50]));

function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here
  let vowels = ["a", "o", "e", "i", "u"];
  let stringArray = str.split("");
  for (let char of stringArray) {
    // for (let i = 0; i < stringArray.length; i++) {
    //   let char = stringArray[i];
    if (vowels.indexOf(char) !== -1) {
      vowelsCount++;
    }
  }
  console.log(vowelsCount);
}
getCount("oopisdfalasd");
