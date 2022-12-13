var passwordLength = 8;
var selectedArray = [];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];  
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Generate Password Button ")
}

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var rightPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");


  if (rightPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;

  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  //generating Password based on the prompts entered
var password = ""; 
for(var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * selectedArray.length);
  password = password + selectedArray[randomIndex];
}
return password;
}

function getPrompts() {
  selectedArray = [];
  passwordLength= parseInt(prompt("Choose the length Between 8-128")); 

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) { 
    alert("Only choose between 8 - 128. Please try again.");
    return false; 
}

  if (confirm("Would you like a lowercase letters?")); {
  selectedArray = selectedArray.concat(lowerCaseArray);
  }

  if (confirm("Would you like a uppercase letters?")); {
  selectedArray = selectedArray.concat(upperCaseArray); 
  }

  if (confirm("Would you like a numbers?")); {
  selectedArray = selectedArray.concat(numbersArray); 
}
  if (confirm("Would you like a special characters?")); {
  selectedArray = selectedArray.concat(specialArray); 
}
return true;
}