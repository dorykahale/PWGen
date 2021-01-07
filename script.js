// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);

// Password characters arrays
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Number of characters prompt
function generatePassword() {
  var confirmLength = (prompt("Enter the amount of characters for your password length (8-128)!"));

  // Loop if answer is outside parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters");
      var confirmLength = (prompt("Enter the amount of characters for your password length (8-128)!"));
      } 
      // Confirm # of characters chosen
      alert("Your password will have " + confirmLength + " characters");

    // Various parameter prompts
    var confirmSpecialCharacter = confirm("Include Special Characters in your password? (Cancel for No - OK for Yes)");
    var confirmNumericCharacter = confirm("Include numeric characters? (Cancel for No - OK for Yes)");    
    var confirmLowerCase = confirm("Include lowercase characters? (Cancel for No - OK for Yes)");
    var confirmUpperCase = confirm("Include uppercase characters? (Cancel for No - OK for Yes)");

      // If no parameters are chosen
      while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Include Special Characters in your password? (Cancel for No - OK for Yes)");
        var confirmNumericCharacter = confirm("Include numeric characters? (Cancel for No - OK for Yes)");    
        var confirmLowerCase = confirm("Include lowercase characters? (Cancel for No - OK for Yes)");
        var confirmUpperCase = confirm("Include uppercase characters? (Cancel for No - OK for Yes)");   
    } 

      // Assigns action to password parameters 

      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
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

      console.log(passwordCharacters)

      // Final generated password as a string
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      }
      return randomPassword;
}

// Places password in #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}