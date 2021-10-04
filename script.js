let enter;

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



var enter = parseInt(prompt("Please enter your desired password length. The password can have a minimun of 8 and a maximum of 128 characters"));

if (passLength === null){}
else if (isNaN(parseInt(passLength)) || isNaN(passLength) || parseInt(passLength) < 8 || parseInt(passLength) > 128) {
  alert("This is not a valid password length. Please choose a number between 8 and 128")
}
else{
  var upperCaseCon = confirm("Would you like uppercase characters in your password?");
  if(upperCaseCon){
    chars = chars + upperCasedChars
  }

  var lowerCaseCon = confirm("Would you like lowercase characters in your password?");
  if(lowerCaseCon){
    chars = chars + lowerCasedChars
  }

  var specialCon = confirm("Would you like Special characters in your password?");
  if(specialCon){
    chars = chars + specialChars
  }
  
  var numberCon = confirm("Would you like numbers in your password?");
  if(numberCon){
    chars = chars + numberChars
  }

  if (chars != ''){
    
  chars = mixChars(chars);
 

  for (var i=0; i<passLength; i++){
    var randomnum = Math.floor(Math.random() * chars.length);
    passw += chars.substring(randomnum,randomnum+1);

    
  
  }
  }
  else{
    alert("please choose characters");
  }

  }

  return passw;
  }











