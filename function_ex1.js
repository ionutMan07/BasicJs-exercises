// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

// let isValidPassword = function (password, username) {
//   if (
//     password.length > 8 &&
//     password.indexOf(" ") === -1 &&
//     password.indexOf(username) === -1
//   ) {
//     console.log("good password");
//   } else {
//     console.log("check your password");
//   }
// };
// isValidPassword("dogLuvr", "dogLuvr");

//second solution

function isValidPassword(password, username) {
  const tooShort = password.length > 8;
  const hasSpace = password.indexOf(" ") === -1;
  const tooSimilar = password.indexOf(username) === -1;
  return tooShort && hasSpace && tooSimilar;
}
console.log(isValidPassword("dadafdssfwqw", "oioiod"));
