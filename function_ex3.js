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
