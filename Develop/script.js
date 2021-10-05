// Input variables
var passLength;
var capLetters;
var lowerCase;
var wholeNum;
var specialChar;



// beginning of user PROMPT's to enter inputs
var selectValues = function() {
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
    
    var countOptions = 0;
    //-prompt user if they want to include uppercase
    var capLetters = window.confirm("Do you want captial letters? OK = YES  Cancel = NO");
    if (capLetters == 0) {
      countOptions = countOptions + 1;
     }

    //-prompt user if they want to include lowercase
    var lowerCase = window.confirm("Do you want lower case letters? OK = YES  Cancel = NO");
    if (lowerCase == 0) {
      countOptions = countOptions + 1;
    }

    //-prompt user if they want to include numeric
    var wholeNum = window.confirm("Do you want numbers? OK = YES  Cancel = NO");
    if (wholeNum == 0) {
      countOptions = countOptions + 1;
    }

    //-prompt user if they want to include special characters
    var specialChar = window.confirm("Do you want special characters? OK = YES  Cancel = NO");
    if (specialChar == 0) {
      countOptions = countOptions + 1;
    }

    //- NOTE: At least one of the above answers needs to be yes  
    if (countOptions == 4) {
      window.alert("You need to select at least one parameter value for the password.  Try again!");
      return selectValues();
    }
}  // end of user inputs for password



//BUILD PASSWORD:
//Need to find VAR to store each value of #, Alpha upper and lower and special char.
//const chars = str.split


//Need to store selected # of user for password

//Need to select ramdom values from stored VAR's that were selected, add to password
//-  -  - use for loop from robot script??
//need to determine if length of password is acheived, compare to stored selected password length
//- - else continue loop or is the else to say if the IF statement is True then display results.

//See screen shots from Saturday's office hours in documents folder.

/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */

selectValues();

