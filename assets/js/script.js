// Assignment code here

// TODO: create variables for character options; lowercase, uppercase, numeric, & special characters
var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', '<', '=>', '?', '@', '[', "]", '^', "_", "{", "|", "}", "~"];


// TODO: create a function that asks the following:
              //"How many characters would you like your new password to have? (Must between 8 - 128 characters)"
                    // if accepted number following prompts will be asked:
                          //"Do you want your new password to include lowercase letters?"
                          //"Do you want your new password to include uppercase letters?"
                          //"Do you want your new password to include numbers?"
                          //"Do you want your new password to include special characters?"
                    // if not user is told "Invalid input, character length must be between 8 - 128 characters. Please try again."


function askPrompts() {
  charLength = parseInt(prompt("How many characters would you like your new password to have? (Must between 8 - 128 characters)"));
  var validLength = (charLength >= 8 && charLength <= 128);
  if (charLength === validLength) {
    
  }

};

// TODO: create IF statement checking if atleast one character has been selected
              //if yes then password will be generated and displayed
              //if no then asked to repeat prompts
function validInput() {

};
              
// TODO: create function to write a password meeting selected criteria
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