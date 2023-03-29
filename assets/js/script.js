// Assignment code here
// TODO: create variables for character options✅
  //TODO: lowercase✔️
  //TODO: uppercase✔️
  //TODO: numeric✔️
  //TODO: special✔️

// TODO: create a variable for selected criteria

//TODO: create a function that asks the following:
  //TODO:"How many characters would you like your new password to have? (Must between 8 - 128 characters)"
    //TODO: if accepted number following prompts will be asked:
      //TODO:"Do you want your new password to include lowercase letters?"
      //TODO:"Do you want your new password to include uppercase letters?"
      //TODO:"Do you want your new password to include numbers?"
      //TODO:"Do you want your new password to include special characters?"
    //TODO:if not user is told "Invalid input, character length must be between 8 - 128 characters. Please try again."

//TODO:create IF statement checking if atleast one character has been selected
  //TODO:if yes then password will be generated and displayed
  //TODO:if no then asked to repeat prompts

// TODO: create function to write a password meeting selected criteria

var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', '<', '=>', '?', '@', '[', "]", '^', "_", "{", "|", "}", "~"];



function askPrompts() {
  charLength = parseInt(prompt("How many characters would you like your new password to have? (Must between 8 - 128 characters)"));
  var validLength = (charLength >= 8 && charLength <= 128);
  if (charLength === validLength) {
    confirm("Do you want your new password to include lowercase letters?");
  }

};

function validInput() {

};
              
function generatePassword() {

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);