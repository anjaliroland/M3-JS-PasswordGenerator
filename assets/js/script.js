// Assignment code here

//variables for character options; lowercase, uppercase, numeric, & special characters
var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', '<', '=>', '?', '@', '[', "]", '^', "_", "{", "|", "}", "~"];


// TODO: create a function that asks the following:
              //prompt for length of password with 8 character min and 128 character max
                    // if accepted number following prompts will be asked:
                          //"Do you want your new password to include lowercase letters?"
                          //"Do you want your new password to include uppercase letters?"
                          //"Do you want your new password to include numbers?"
                          //"Do you want your new password to include special characters? "
                    // if not user is told to try again

// TODO: create IF statement checking if atleast one character has been selected
              //if yes then password will be generated and displayed
              //if no then asked to repeat prompts

// TODO: create function to write a password meeting selected criteria


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