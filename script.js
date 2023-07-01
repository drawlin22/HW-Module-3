
// Assignment Code

const generateBtn = document.querySelector("#generate"); /* Constant that cannot be changed (generatebtn pulling from ID generate in HTML)*/

/* Characterset reference - http:/www.net-comber.com/charset.html */

    let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase="abcdefghijklmnopqrstuvwxyz";
    let number="0123456789";
    let symbols="!)@(#*$&%^<>?.";
    let characterBank="";

function generatePassword() {
  let confirmUpperCase= window.confirm("Click ok if you want to include uppercase letters") /*user confirm box */
  let confirmLowerCase= window.confirm("Click ok if you want to include lowercase letters") /*user confirm box */
  let confirmNumbers= window.confirm("Click ok if you want to include numbers") /*user confirm box */
  let confirmSymbols= window.confirm("Click ok if you want to include symbols") /*user confirm box */
  let passwordLength = prompt("How many characters do you want in your password",12) /*user prompt box */
  
if (passwordLength > 128 || passwordLength <8) {
  return "Incorrect password length requested"
};

if (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSymbols) {
  return "Please make character selections"
};

  if (confirmUpperCase === true) { /* if user select to add upper case letters, string "uppercase" is added to the character bank */
  characterBank=characterBank+uppercase
} ;
  if (confirmLowerCase === true) { /* if user select to add lower case letters, string "lowercase" is added to the character bank */
  characterBank=characterBank+lowercase
} ;
  if (confirmNumbers === true) { /* if user select to add numbers, string "number" are added to the character bank */
  characterBank=characterBank+number
} ;
  if (confirmSymbols === true) { /* if user select to add symbols, string "symbols" are added to the character bank */
  characterBank=characterBank+symbols;
};

var randomPassword = "";
for(var i = 0; i < passwordLength; i++){
  var randomIndex = Math.floor(Math.random()*characterBank.length)
  // new variable (randomIndex) = Math.random to create index => 0 to the length of the characterBank.
  randomPassword = randomPassword + characterBank[randomIndex]
  
};

  return randomPassword;

}

// Write password to the #password input
function writePassword() {
  const password = generatePassword(); 
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

};

generateBtn.addEventListener('click', writePassword);





