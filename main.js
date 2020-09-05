// alert("I'm a good script");
// checking number if odd or even

let number = 3;
if (number % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

//check password condition using nesting

let password = "hi2sdada31";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1 && password.indexOf("123") === -1) {
    console.log("Password is ok");
  } else {
    console.log("Remove the spaces or change 123");
  }
} else {
  console.log("Password must be longer");
}

// Operator precedence

// let x = 7;

// THIS VERSION RETURNS TRUE
//&& runs before ||
//x == 7 || x === 3 && x > 10;

// THIS VERSION RETURNS FALSE
// Use parens to change order
// (x == 7 || x === 3) && x > 10);

// Switch with overlapping cases...

let emoji = "heartd";

switch (emoji) {
  case "sad face":
  case "happy face":
    console.log("yellow");
    break;
  case "eggplant":
    console.log("purple");
    break;
  case "heart":
  case "lips":
    console.log("red");
    break;
  default:
    console.log("none of them");
}

//ternary operators

let status = "offline";
let color = status === "online" ? "green" : "red";
console.log(color);

// count the vowels out of a word

function getCount(str) {
  var vowelsCount = 0;

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
