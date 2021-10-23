function generatePassword() { 
// text area for password
  var selLength = window.prompt("Please key desired password character length between 8 and 128 characters");
  if (selLength <8){window.alert("Password must be greater than or equal to 8 characters in length");
  return
  }
  if (selLength >128){window.alert("Password must be less than or equal to 128 characters in length");
  }


  var selNumber = window.confirm("Does your password require numbers?")
  var number = function numb() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
     
  var selLower = window.confirm("Does your password require lowercase in the format?");
  var lowCase = function lower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  var selUpper = window.confirm("Does your password require uppercase characters?")
  var upCase = function upper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  var selSymbol = confirm("Does your password require special characters?")
  var specialChar = "$#@!%^&*()_-{}[];:<>,.?/";

  var promptResponses = "";

  if ( selNumber === true) {
    promptResponses = promptResponses + number
  }
  if ( selLower === true) {
    promptResponses = promptResponses + lowCase 
  }
  if ( selUpper === true) {
    promptResponses = promptResponses + upCase
  }
  
  if ( selSymbol === true) {
    promptResponses = promptResponses + specialChar
  }

   if (promptResponses.length === 0 ) {
    window.alert("One option must be selected")
    return    
  }

var text = "";
for (i = 0; i < selLength; i++ ) {
  text += promptResponses.charAt(Math.floor(Math.random() * promptResponses.length));
}

var password = text;
return password

}


   

// Assignment Code - button
var generateBtn = document.querySelector("#generate");

// text area for password
function writePassword() {}

 
   
//Generate Password Function
var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button -mouse click 
generateBtn.addEventListener("click", writePassword);

