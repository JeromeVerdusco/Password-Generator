
// Array of special characters to be included in password
var splChar = ['@', '%', '+', '/', '!', '#', '$', '^', '?', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var smallLeters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password
var capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Input variables
var passLength;
var capLetters;
var lowerCase;
var wholeNum;
var specialChar;

 
// beginning of user PROMPT's to enter inputs
function selectValues() {
  //-prompt user to select password length between 8 and 128 characters
  passLength = window.prompt("How many characters?  Select a number between 8 and 128.");
  passLength = parseInt(passLength);
  if (passLength < 8 || passLength > 128) {
  window.alert("Your number must be between 8 and 128.  Try again!");
  return selectValues();     
  }  

  if (isNaN(passLength)) {
  console.log(isNaN(passLength));
  window.alert("Your answer needs to be a Whole Number!  Please enter a number.");
  return selectValues();
  }

  //-prompt user if they want to include uppercase
  capLetters = window.confirm("Do you want captial letters? OK = YES  Cancel = NO");  

  //-prompt user if they want to include lowercase
  lowerCase = window.confirm("Do you want lower case letters? OK = YES  Cancel = NO");  

  //-prompt user if they want to include numeric
  wholeNum = window.confirm("Do you want numbers? OK = YES  Cancel = NO");

  //-prompt user if they want to include special characters
  specialChar = window.confirm("Do you want special characters? OK = YES  Cancel = NO");   

  //- NOTE: At least one of the above answers needs to be yes  
  if (!capLetters && !lowerCase && !wholeNum && !specialChar) {
  window.alert("You need to select at least one parameter value for the password.  Try again!");
  return selectValues();
  }
  // end of user inputs for password 
    

    // create IF statements for selected characters
    var passwordGen = []

    if (capLetters) {
      passwordGen = passwordGen.concat(capitalLetters)
    }

    if (lowerCase) {
      passwordGen = passwordGen.concat(smallLeters)
    }

    if (wholeNum) {
      passwordGen = passwordGen.concat(numericChar)
    }

    if (specialChar) {
      passwordGen = passwordGen.concat(splChar)
    }

      console.log(passwordGen)

      // For loop selecting random characters from array
      var generatePass = ""
      
      for (var i = 0; i < passLength; i++) {
        generatePass = generatePass + passwordGen[Math.floor(Math.random() * passwordGen.length)];
        console.log(generatePass)
      }

      return generatePass;
}      


    // Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = selectValues();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);