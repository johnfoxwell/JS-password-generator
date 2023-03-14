// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generate password function we are writing
// Have to refresh the page to get a new pass or else old pass will be added on to the new pass

//Empty strings to hold accepted characters and new password
var chars = ""
var newPass = ""


// Main function
function generatePassword() {
  var passLength = prompt("Please choose a password length (8 - 128)")
  if (passLength < 128 && passLength >= 8) {
    console.log("Accepted Length")
    console.log(passLength)
  } else {
    console.log("Denied")
    confirm("Please pick an accepted password length (8 - 128)")
    // I used a return; to kind of create a "loop" so if you answer wrong on the first question it restarts
    return;
  }

  //Prompt codes
  var passLower = prompt("Do you want lowercase letters? (y or n)")
  if (passLower === "y") {
    console.log("Accepted Lower")
    test1 = "abcdefghijklmnopqrstuvwxyz"
    chars += test1
  } else if (passLower === "n") {
    console.log("Ok")
  } else {
    console.log("Denied")
  }
  
  var passUpper = prompt("uppercase? (y or n)")
  if (passUpper === "y") {
    console.log("Accepted Upper")
    test2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    chars += test2
  } else if (passUpper === "n") {
    console.log("Ok")
  } else {
    console.log("Denied")
  }

  var passNum = prompt("numbers? (y or n)")
  if (passNum === "y") {
    console.log("Accepted Number")
    test3 = "123456789"
    chars += test3
  } else if (passNum === "n") {
    console.log("Ok")
  } else {
    console.log("Denied")
  }

  var passSpecial = prompt("special? (y or n)")
  if (passSpecial == "y") {
    console.log("Accepted Special")
    test4 = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    chars += test4
  } else if(passSpecial == "n") {
    console.log("Ok")
  } else {
    console.log("Denied")
  }

  console.log(chars);

  // Main for loop
  for (i = 0; i < passLength; i++) {
    // Create a variable named randomPass
    // Math.floor rounds down to nearest integer
    // math.random gets a number between 0 and 1(not including 1) and then multiplies that by a max number (in this case it is the length of the accepted chars) to give you a "random number"
    // Ex (math.random() = .5)  * (chars.length = 25)
    // this gives up 12.5 and rounded down with math.floor() gives us 12
    // 12 is stored in randomPass
    var randomPass = Math.floor(Math.random() * chars.length);
    newPass += chars.substring(randomPass, randomPass +1);
    // chars.substring extrarts text from a string with a given index
    // in this case our index is 12, 12+1 = 13 (we do this to select 1 letter)
    // We have to give an end parameter because it will select the rest of the string if we just give one number
    // Then we concatenate the character to the var newPass
    // Then we loop back for the desired passLength
  }

  return newPass;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// References

// https://www.w3schools.com/jsref/met_win_prompt.asp - for learning about window prompt()
// https://www.w3schools.com/jsref/met_win_confirm.asp - for confirm message
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random - for random selection
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor - for math floor
