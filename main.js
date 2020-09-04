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

let x = 7;

// THIS VERSION RETURNS TRUE
//&& runs before ||
//x == 7 || x === 3 && x > 10;

// THIS VERSION RETURNS FALSE
// Use parens to change order
console.log((x == 7 || x === 3) && x > 10);
