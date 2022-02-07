function reverse(word) {
  // const arrayWord = word.split('');
  // const reverseArray = arrayWord.reverse();
  // const stringReverseArray = reverseArray.join('')
  // return stringReverseArray

  return word.split('').reverse().join('')
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)

  return word === reversedWord;
} 

//   if (word === reversedWord) {
//     return true;
//   } else {
//     return false;
//   }
// }

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
