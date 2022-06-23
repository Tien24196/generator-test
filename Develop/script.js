// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numBer = "0123456789";
var specChar = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";

function generatePassword() {

  var passLength = window.prompt("How many characters do you want in your password?");

  if(passLength >= 8 && passLength <= 128) {
    
    var pickedLowercase = window.confirm("Do you want to include lowercase characters in your password?")
    var pickedUppercase = window.confirm("Do you want to include uppercase characters in your password?")
    var pickedNumber = window.confirm("Do you want to include number characters in your password?")
    var pickedSpechar = window.confirm("Do you want to include special characters in your password?")

    while(pickedLowercase === false && pickedUppercase === false && pickedNumber === false && pickedSpechar === false) {
      window.alert("You must choose at least one character type!")
      var pickedLowercase = window.confirm("Do you want to include lowercase characters in your password?")
      var pickedUppercase = window.confirm("Do you want to include uppercase characters in your password?")
      var pickedNumber = window.confirm("Do you want to include number characters in your password?")
      var pickedSpechar = window.confirm("Do you want to include special characters in your password?")
        
  } 
    var passChar = ""
    if (pickedLowercase) {var passChar = passChar.concat(lowerCase)};
    if (pickedUppercase) {var passChar = passChar.concat(upperCase) };
    if (pickedNumber) {var passChar = passChar.concat(numBer) };
    if (pickedSpechar) {var passChar = passChar.concat(specChar)};

    var password = ""
    for (var i = 0; i < passLength; i++) {
      password = password + passChar[Math.floor(Math.random() * passChar.length)];
     }

  } else {
    window.alert("Password's lenght has to be between 8 and 128 character");
    generatePassword()
  }

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
