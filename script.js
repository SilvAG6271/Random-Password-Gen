 // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");

 // Create variables used in password; 
   const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const lowerCase = "abcdefghijklmnopqrstuvwxyz";
   const symbols = "~`!@#$%^&*()-_+={[}]|\:';'<>?,./";
   const numbers = "0123456789"; 
 
 
 //create function to generate password
 function generatePassword() {
   var options = "";
   var passwordLength = prompt("Pick a password length from 8 to 128 characters.");
   if (passwordLength < 8 || passwordLength > 128){
     alert("Please try again.");
     return generatePassword();
   }
   //use confirm to get user choices
   var wantUppercase = confirm("Do you want uppercase letters?")
   var wantLowercase = confirm("Do you want lowercase letters?")
   var wantNumeric = confirm ("Do you want numbers?")
   var wantSymbols = confirm("Do you want special characters?")
   if (!wantUppercase && !wantLowecase && !wantNumeric && !wantSymbols){alert("Must choose at least one option.")
 return generatePassword();
 }
   if (wantUppercase) {options += upperCase
   }
   if (wantLowercase) {options += lowerCase
   }
   if (wantNumeric) {options += numbers
   }
   if (wantSymbols) {options += symbols
   }
   var password = ""
   for ( var i = 0; i < passwordLength; i++){
     var randomIndex = Math.floor(Math.random() * options.length);
     var randomChar = options[randomIndex];
     password += randomChar;
  }
    return password
     }
 
   
 
  //Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
  
 }
 
 
  //Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 