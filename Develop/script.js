
// Input variables
var passLength;
var capLetters;
var lowerCase;
var wholeNum;
var specialChar;

const randomVal = {
  cap: getRandomUpper,
  lower: getRandomLower,
  whole: getRandomWholeNum,
  special: getRandomSpecialChar
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwords = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwords;

  selectValues(); 
}
 


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

  console.log(capLetters);
  console.log(lowerCase);
  console.log(wholeNum);
  console.log(specialChar);

  generatePassword();
}  
// end of user inputs for password


// Functions to generate random characters from Browser Character Set
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  console.log(getRandomUpper());

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

function getRandomWholeNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomWholeNum());

function getRandomSpecialChar() {
  const symbols = '!@#$%^&*';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSpecialChar());



function generatePassword(capLetters, lowerCase,  wholeNum, specialChar, passLength) {
  let generatedPassword = '';
  const typesCount = capLetters + lowerCase + wholeNum + specialChar;
  console.log('typesCount: ', typesCount);
  const typesArr = [{capLetters},  {lowerCase}, {wholeNum}, {specialChar}].filter(item => Object.values(item)[0]);
  
  console.log('typesArr: ', typesArr);
    
  // create a loop
  for(let i=0; i<passLength; i+=typesCount) {
    typesArr.forEach(type => {
      funcName = Object.keys(type)[0];
      generatedPassword += randomVal[funcName]();
    });
  }
  
  const finalPassword = generatedPassword;

  //console.log(passwords);

  return finalPassword; 
  
} 

typesArr = [{capLetters},  {lowerCase}, {wholeNum}, {specialChar}].filter(item => Object.values(item)[0]);
  
console.log('typesArr: ', typesArr);

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

