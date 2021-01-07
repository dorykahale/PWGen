// Add Event Listener in generate button
document.querySelector("#generate").addEventListener("click", writePassword);

// Password Characters
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "?", "/", ":", ";", "+"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSymbol;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Number of Characters prompt
function generatePassword() {
  var confirmLength = (prompt("Enter the amount of characters your password needs (8-128)!"));

  // Loop if answer is outside parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters");
      var confirmLength = (prompt("Enter the amount of characters for your password length (8-128)!"));
      } 
      // Confirm # of characters chosen
      alert("Your password will have " + confirmLength + " characters");

    // Parameter prompts
    var confirmSymbol = confirm("Would you like to include SYMBOLS in your password?");
    var confirmNumericCharacter = confirm("How about NUMERIC characters?");    
    var confirmLowerCase = confirm("LOWER CASE characters?");
    var confirmUpperCase = confirm("UPPER CASE characters?");

      // If NO parameters are chosen prompt & action
      while (confirmUpperCase === false && confirmLowerCase === false && confirmSymbol === false && confirmNumericCharacter === false) {
        alert("You must choose at least one CHARACTER type");
        var confirmSymbol = confirm("Would you like to include SYMBOLS in your password?");
        var confirmNumericCharacter = confirm("How about NUMERIC characters?");    
        var confirmLowerCase = confirm("LOWER CASE characters?");
        var confirmUpperCase = confirm("UPPER CASE characters?");   
    } 

      // Assigns action to password parameters 

      var passwordCharacters = []
      
    if (confirmSymbol) {
      passwordCharacters = passwordCharacters.concat(symbol)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      // Final generated password
      var randomPasswordGenerated = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPasswordGenerated = randomPasswordGenerated + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      }
      return randomPasswordGenerated;
}

// Places password in #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}