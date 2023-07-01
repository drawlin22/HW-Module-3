
// Assignment Code

const generateBtn = document.querySelector("#generate"); /* Constant that cannot be changed (generatebtn pulling from ID generate in HTML)*/

/* Characterset reference - http:/www.net-comber.com/charset.html */


    let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase="abcdefghijklmnopqrstuvwxyz";
    let number="0123456789";
    let symbols="!)@(#*$&%^<>?.";
    let characterBank="";

function generatePassword() {
  let confirmUpperCase= window.confirm("Click ok if you want to include uppercase letters")
  let confirmLowerCase= window.confirm("Click ok if you want to include lowercase letters")
  let confirmNumbers= window.confirm("Click ok if you want to include numbers")
  let confirmSymbols= window.confirm("Click ok if you want to include symbols")
  let passwordLength = prompt("How many characters do you want in your password",8)
  
if (passwordLength > 128 || passwordLength <8) {
  return "Incorrect password length requested"
}

if (!passwordLength) {
  return "Incorrect password length requested"
}

if (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSymbols) {
  return "Please make character selections"
}

  if (confirmUpperCase === true) { 
  characterBank=characterBank+uppercase
} 
  if (confirmLowerCase === true) {
  characterBank=characterBank+lowercase
} 
  if (confirmNumbers === true) {
  characterBank=characterBank+number
} 
  if (confirmSymbols === true) {
  characterBank=characterBank+symbols;
}


var randomPassword = "";
for(var i = 0; i < passwordLength; i++){
  var randomIndex = Math.floor(Math.random()*characterBank.length)
  // new variable (randomIndex) = Math.random to create index => 0 to the length of the characterBank.
  randomPassword = randomPassword + characterBank[randomIndex]
console.log (randomPassword);
}

  return randomPassword;


}

// Write password to the #password input
function writePassword() {
  const password = generatePassword(); 
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener('click', writePassword) 





