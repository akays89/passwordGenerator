let input;

const specialChars = ["!", "#", "$", "%", "&", "'" ,"*", "+", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@"];
 const numberChars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const lowerCasedChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCasedChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let choices;
let password = [];

 
const generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){



let input = parseInt(prompt("Please enter your desired password length. The password can have a minimum of 8 and a maximum of 128 characters."));

if (isNaN(input === true)) {
  alert("Value must be a number!");
  return;
}
 if (input < 8) {
   alert("The password must be at least 8 characters!")
   return;
 }

if (input > 128) {
  alert("The password must be less than 129 characters!")
  return;
}




const confirmNum = confirm("Select OK if you'd like to include numbers in your password.");
const confirmChar = confirm("Select OK if you'd like to include special characters in your password.");
const confirmUppercase = confirm("Select OK if you'd like to include uppercase letters in your password.");
const confirmLowercase = confirm("Select OK if you'd like to include lowercase letters in your password.");

if (confirmNum === false  && confirmChar===false && confirmUppercase === false && confirmLowercase === false) {
  alert("You must select at least one criteria"); 
  return; 
}


let passwordOptions = {
  input: input,
  confirmNum: confirmNum,
  confirmUppercase: confirmUppercase,
  confirmLowercase: confirmLowercase, 
  confirmChar:confirmChar
  };

 let choices = [];

 if (passwordOptions.confirmNum === true) {
  choices =choices.concat(numberChars);
  }
  
  if (passwordOptions.confirmUppercase === true) {
    choices =choices.concat(upperCasedChars);
  }
  
  
  if (passwordOptions.confirmLowercase === true) {
      choices =choices.concat(lowerCasedChars);
  }
  
  
  if (passwordOptions.confirmChar === true) {
      choices =choices.concat(specialChars);
    }

    for (let i =0; i < input; i++) {
      const randoChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(randoChoices);
      
     }

     return password.join('');
    }












