  
 
 // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");

 
   
   
 //create function to generate password
   
   function generatePassword() {
  //created variables for options
   var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var lowerCase = "abcdefghijklmnopqrstuvwxyz";
   var symbols = "~`!@#$%^&*()-_+={[}]|\:';'<>?,./";
   var numbers = "0123456789"; 
   var options = "";
   //set variable for pw length and checks for proper user input
   var passwordLength = prompt("Pick a password length from 8 to 128 characters.");
   if (passwordLength < 8 || passwordLength > 128){
     return("Please try again.");
    } else if (isNaN(passwordLength)) {
      passwordLength = prompt("Please enter a valid number");
    }
    else {
      alert("Your password will be " + passwordLength + " characters long.")
    }
    
  
   //use confirm to get user choices and confirm those choices
   var wantUppercase = confirm("Do you want uppercase letters?");
   if (wantUppercase) {
    alert("Password will include uppercase characters.");
   }else{
    alert("Password will not include uppercase characters.")
   }
   

   var wantLowercase = confirm("Do you want lowercase letters?");
   if (wantLowercase) {
     alert("Password will include lowercase characters.");
   }else{
    alert("Password will not include lowercase characters")
   }

   var wantNumeric = confirm ("Do you want numbers?")
   if (wantNumeric) {
     alert("Password will include numbers.");
   }else{
     alert("Password will not include numbers.")
   }

   var wantSymbols = confirm("Do you want special characters?")
   if (wantSymbols) {
    alert("Password will include special characters.");
   }else{
    alert("Password will not include special characters.")
   }
   // check to make sure user picks one character
   if (wantLowercase === false && wantUppercase === false && wantNumeric === false && wantSymbols === false) {
    return "Please select at least one character type.";
  };

  // combine selected characters
  if (wantLowercase) {
    options = options.concat(lowerCase);
  }
  if (wantUppercase) {
    options = options.concat(upperCase);
  }
  if (wantNumeric) {
    options = options.concat(numbers);
  }
  if (wantSymbols) {
    options = options.concat(symbols);
  }
   
   var password = ""
   for ( var i = 0; i < passwordLength; i++){
     var randomIndex = Math.floor(Math.random() * options.length);
     var randomChar = options[randomIndex];
     password += randomChar;
  }
    return password;
     
  };
   
 
  //Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
  
 }
 
 //Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 

 