// Assignment code here

/* Global Variables */
var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
var integers = '123456789'
var symbolics = '@#$%&*'

// Generat Password Function
function generatePassword() {
  // Prompt Questions
  var upperCase = window.confirm("Would you like to include uppercase letters?")
  var lowerCase = window.confirm("Would you like to include lowercase letters?")
  var numbers = window.confirm("Would you like to include to numbers?")
  var symbols = window.confirm("Would you like to include symbols?")
  var amount = Number(window.prompt("How many characters would you like? (Between 8 and 128)"))
  while (amount <= 7 || amount >= 129 || isNaN(amount)) amount = Number(window.prompt("Please input a number between 8 and 128"))

  // Object with truthy and falsy for funtion use
  var questionAnswers = {
    upper: upperCase,
    lower: lowerCase,
    number: numbers,
    symbol: symbols,
    length: amount
  }

  console.log(questionAnswers)



  return password = "bruh"
}




















































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
