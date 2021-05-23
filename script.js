// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function mixChars(charMix){
  
  charMix = charMix.split('');
  var n = charMix.length;
  for (var i = n-1; i>0; i--)
  {
    var j = Math.floor(Math.random() * (i+1));
    var tmp = charMix[i];
    charMix[i] = charMix[j];
    charMix[j] = tmp;
  }
  
  return charMix.join("");
  
  }
function generatePassword(){

var specialChars = ["!", "#", "$", "%", "&", "'" ,"*", "+", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@"];
 
var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerCasedChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasedChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var chars = '';
var passw = '';

var passLength = prompt("Please enter your desired password length. The password can have a minimun of 8 and a maximum of 128 characters");

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
    chars = chars + upperCasedChars
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


 











