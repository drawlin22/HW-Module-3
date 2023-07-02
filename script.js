
// Assignment Code

const generateBtn = document.querySelector("#generate"); /* Constant that cannot be changed (generatebtn pulling from ID generate in HTML)*/

    let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase="abcdefghijklmnopqrstuvwxyz";
    let number="0123456789";
    let symbols="~`|!)@(#*$&%^<>?.-+[]{};?/";
    let characterBank="";

function generatePassword() {
  let confirmUpperCase= window.confirm("Click ok if you want to include uppercase letters") /*user confirm box */
  let confirmLowerCase= window.confirm("Click ok if you want to include lowercase letters") /*user confirm box */
  let confirmNumbers= window.confirm("Click ok if you want to include numbers") /*user confirm box */
  let confirmSymbols= window.confirm("Click ok if you want to include symbols") /*user confirm box */
  let passwordLength = parseInt(prompt("How many characters do you want in your password",8)) /*user prompt box */
  
if (passwordLength > 128 || passwordLength <8) {
  return "Incorrect password length requested"
};

let randomPassword = "";

if (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSymbols) {
  return "Please make character selections" /* if no user selections are made */
};

  if (confirmUpperCase === true ) { /* if user select to add upper case letters, string "uppercase" is added to the character bank */
  let randomupperIdx = Math.floor(Math.random() *uppercase.length)
  let randomupper = uppercase[randomupperIdx]
  characterBank += uppercase ; /* character bank = character bank + uppercase */
  randomPassword += randomupper;
} ;
  if (confirmLowerCase === true) { /* if user select to add lower case letters, string "lowercase" is added to the character bank */
 let randomlowerIdx = Math.floor(Math.random() *lowercase.length)
 let randomlower = lowercase[randomlowerIdx]
 randomPassword += randomlower;
  characterBank=characterBank+lowercase
} ;
  if (confirmNumbers === true) { /* if user select to add numbers, string "number" are added to the character bank */
let randomnumberIdx = Math.floor(Math.random() *number.length)
let randomnumber = number[randomnumberIdx]
randomPassword += randomnumber;
  characterBank=characterBank+number
} ;
  if (confirmSymbols === true) { /* if user select to add symbols, string "symbols" are added to the character bank */
let randomsymbolIdx = Math.floor(Math.random() *symbols.length)
let randomsymbols = symbols[randomsymbolIdx]
randomPassword += randomsymbols;
characterBank=characterBank+symbols;

};

let condition = passwordLength - randomPassword.length /* would not work in the for loop */

for(let i = 0; i < condition; i++){
  let randomIndex = Math.floor(Math.random()*characterBank.length)
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





