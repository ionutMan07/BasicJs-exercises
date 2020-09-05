// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence
// contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

let alphabet = "abcdefghijklmnoprstuvwqxyz";
let isPangram = function (sentence) {
  let small = sentence.toLowerCase();
  for (let char of alphabet) {
    if (small.indexOf(char) === -1) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};

isPangram("The five boxing wizards jump quickly");

// second solution with .includes

let alphabett = "abcdefghijklmnoprstuvwqxyz";
let isPangramm = function (sentencee) {
  let smalll = sentencee.toLowerCase();
  for (let charr of alphabett) {
    if (!smalll.includes(charr)) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};
isPangramm("The five boxing wiards jump quickly");
