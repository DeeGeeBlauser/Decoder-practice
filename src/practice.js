const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "r",
  "u",
  "v",
  "x",
  "y",
  "z",
];

// const newShift = function shiftAmount(shift) {
//   if (shift >= 26) {
//     shift = shift % 26;
//   } else {
//     shift = shift;
//   }
//   return shift;
// }

function encrypter(startMessage, shift) {
  if (shift >= 26) {
    shift = shift % 26;
  } else {
    shift = shift;
  }
  let endMessage = "";
  for (let char in startMessage) {
    let lowerChar = startMessage[char].toLowerCase();
    if (alphabet.includes(lowerChar)) {
      let newPosition = alphabet.indexOf(lowerChar) + shift;
      endMessage += alphabet[newPosition];
    } else {
      endMessage += lowerChar;
    }
  }
  return endMessage;
}
encrypter("Ab c", 26);
module.exports = encrypter;
