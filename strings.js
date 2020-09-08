function getNumberOfChars(name) {
  // return the number of characters in: name
  return name.length;
}

function getFirstChar(name) {
  // return the first character of: name
  return name[0];
}

function getLastChar(name) {
  // return the last character of: name
  return name[name.length - 1];
}

function getLower(name) {
  // return name all in lower case (example: "ABC" becomes "abc")
  return name.toLowerCase();
}

function getUpper(name) {
  // return name all in upper case (example: "abc" becomes "ABC")
  return name.toUpperCase();
}

let getCapitalized = function (name) {
  // return a capitalized version of name (example: "alEX" becomes "Alex")
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
};

function getClean(name) {
  // return name without trailing and leading space (example: " alex " becomes: "alex")
  return name.trim();
}
console.log(getCapitalized("ionutErs"));
console.log(getFirstChar("ioifsdjkh"));
