// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  minLengthPrompt = "What is the minimum length of the password?"
  var minLengthValidationPrompt = "Choose a length of at least 8 characters and no more than 128 characters - must be entered as a number"
  var minLength = getIntegerInput(minLengthPrompt, minLengthValidationPrompt);
  maxLengthPrompt = "What is the maximum length of the password?"
  var maxLengthValidationPrompt = "Choose a length of at least 8 characters and no more than 128 characters - must be entered as a number"
  var maxLength = getIntegerInput(maxLengthPrompt, maxLengthValidationPrompt);
}

    function getIntegerInput(defaultPrompt, validationPrompt) {
      var integerValue;
      var showValidationMessage = false;
      console.log("set max length");

      while (integerValue == null) {
        var windowPrompt = defaultPrompt;
  
        if(showValidationMessage) {
          windowPrompt += validationPrompt;
        }
        var integerInput = window.prompt(windowPrompt);
         integerValue = parseInt(integerInput);
        console.log(integerInput);
       
        if(isNaN(integerInput)) {
          console.log("If doesnt meet criteria");
          showValidationMessage = true;
          integerValue = null;
        } 
      }
    }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("endListener")


function generatePassword() {
  return "";
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
