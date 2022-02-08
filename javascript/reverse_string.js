// function reverseString(str) {
//   // type your code here
//   let output = ""
//   for (let i = str.length -1; i >= 0; i--) {
//     output += str[i]
//   }
//   return output
// }
function reverseString(str) {
  let output = []
  for (let i = 0; i <= str.length; i++) {
    output.unshift(str[i])
  }
  return output.join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// 1.seperate the string into characters 
// 2.reverse the order of the characters
// 3. join the character together