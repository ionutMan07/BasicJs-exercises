// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

let getCard = function () {
  let key = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let averageNumK = Math.floor(Math.random() * 14 + 1);
  let averageNumKey = key[averageNumK];

  let value = ["clubs", "spades", "hearts", "diamonds"];
  let averageNumV = Math.floor(Math.random() * 4 + 1);
  let averageNumValue = value[averageNumV];

  return { averageNumKey: averageNumKey, averageNumValue: averageNumValue };
};
getCard();
console.log(getCard());

//Second solution

function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx]; //returns index for values and suit
}

function getCards() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  return { value: pick(values), suit: pick(suits) };
}
getCards();
console.log(getCards());
