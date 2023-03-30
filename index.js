function reverseString(word){
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord=reverseString(word)

  if(word===reversedWord){
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here;
  If word is a palindrome,return true,else false
*/

/*
  Add written explanation of your solution here;
  I need an if else  statement in my argument.And it returns true if the word 
  is a palindrome,false if its not a palindrome.Since I dont know any method that
   directly determines whether a word is a palindrome or not,I will have to find a way
    to convert the word into its reverse,by reversestring().ReverssString in a
     constant.If word ===the constant,return true ,else false
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
