let input;

const specialChars = ["!", "#", "$", "%", "&", "'" ,"*", "+", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@"];
 
const numberChars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const lowerCasedChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCasedChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const choices;
const password = [];

 
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){



let input = parseInt(prompt("Please enter your desired password length. The password can have a minimum of 8 and a maximum of 128 characters"));

if (isNaN(input === true)) {
  alert("Value must be a number");
  return
}
 if (input < 8) {
   alert("The password must be at least 8 characters")
   return;
 }

if (input > 128) {
  alert("The password must be less than 129 characters")
  return;
}


}












