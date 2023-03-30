// Assignment code here

// character variables
var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', '<', '=>', '?', '@', '[', "]", '^', "_", "{", "|", "}", "~"];

// variable to hold selected criteria
var passwordArr = [];


function generatePassword() {
// prompt determining character length
  charLength = parseInt(prompt("How many characters would you like your new password to have? (Must between 8 - 128)"));

// validates the number entered is in accepted range
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    window.alert("Invalid input, password length must be between 8 - 128 characters. Please try again.");
    generatePassword();

// popups confirming criteria to be met
  } else {  
    if (confirm("Do you want your new password to include lowercase letters?")) {
      passwordArr = passwordArr.concat(lowercaseChar);
    }
    if (confirm("Do you want your new password to include uppercase letters?")) {
      passwordArr = passwordArr.concat(uppercaseChar);
    }
    if (confirm("Do you want your new password to include numbers?")) {
      passwordArr = passwordArr.concat(numberChar);
    }
    if (confirm("Do you want your new password to include special characters?")) {
      passwordArr = passwordArr.concat(specialChar);
    } 
  } ;

// validates at least one character type has been chosen
  if (passwordArr.length === 0) {
    window.alert("Must select at least one character type.");
    generatePassword();

// randomly chooses characters from the array made of selected criteria
  } else {
    var password = "";
    for (let i = 0; i < charLength; i++) {
      password += passwordArr[Math.floor(Math.random() *passwordArr.length)];
    };

// ties function into code below to display generated password
  return password;
  };
};
              

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordArr.length = 0;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

