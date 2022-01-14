// Assignment code here
// Generat Password Function
function generatePassword() {
  // Prompt Questions
  var upperCase = window.confirm("Would you like to include uppercase letters?")
  var lowerCase = window.confirm("Would you like to include lowercase letters?")
  var numbers = window.confirm("Would you like to include to numbers?")
  var symbols = window.confirm("Would you like to include symbols?")
  var amount = Number(window.prompt("How many characters would you like? (Between 8 and 128)"))
  while (amount <= 7 || amount >= 129 || isNaN(amount)) amount = Number(window.prompt("Please input a number between 8 and 128"))

  function generate(upper, lower, number, symbol, amount) {
    let genPassword = ''

    var randomFunc = {
      lower: lowercaseRandom,
      upper: uppercaseRandom,
      number: integerRandom,
      symbol: symbolRandom
    }

    var characterTypes = upper + lower + number + symbol;
    var characterArray = [{ upper }, { lower }, { number }, { symbol }].filter(
      item => Object.values(item)[0]
    );

    if (characterTypes === 0) {
      return '';
    };

    for (let i = 0; i < amount; i += characterTypes) {
      characterArray.forEach(type => {
        var functionNames = Object.keys(type)[0];
        genPassword += randomFunc[functionNames]();
      });
      password = genPassword.slice(0, amount)
      return password;
    };

    function uppercaseRandom() {
      var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      return upperLetters[Math.floor(Math.random() * upperLetters.length)]
    }

    function lowercaseRandom() {
      var lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
      return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
    }

    function integerRandom() {
      var integers = '123456789'
      return integers[Math.floor(Math.random() * integers.length)]
    }

    function symbolRandom() {
      var symbolics = '@#$%&*'
      return symbolics[Math.floor(Math.random() * symbolics.length)]
    }
  }
  generate(upperCase, lowerCase, numbers, symbols, amount)
  return password;
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