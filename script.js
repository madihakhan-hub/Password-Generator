// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a random password
function generatePassword() {

  //Define variables
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  //Ask for password criteria
  var passwordLength = parseInt(prompt("Enter the length of your password (between 8 and 128 characters):"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length.");
    return "";
  }

  var useLowercase = confirm("Include lowercase letters?");
  var useUppercase = confirm("Include uppercase letters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");

  if (!(useLowercase || useUppercase  || useNumeric || useSpecial)) {
    alert("At least one character type must be selected.");
    return "";
  }
  
  //Combine character sets
  var allChars = " ";
  if (useLowercase) allChars += lowercaseChars;
  if (useUppercase) allChars += uppercaseChars;
  if (useNumeric) allChars += numericChars;
  if (useSpecial) allChars += specialChars;

  //Gemerate password 
  var password = "";
  for (var i = 0; i < passwordLength; ++i) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
