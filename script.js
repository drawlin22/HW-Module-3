
// Assignment Code

const generateBtn = document.querySelector("#generate"); /* Constant that cannot be changed (generatebtn pulling from ID generate in HTML)*/

/* Characterset reference - http:/www.net-comber.com/charset.html */


    let uppercase=String.fromCharCode(Math.floor(Math.random() * 26) +65);
    let lowercase=String.fromCharCode(Math.floor(Math.random() * 26) +97);
    let number=String.fromCharCode(Math.floor(Math.random() * 10) +48);
    let symbols="!)@(#*$&%^<>?.";

    let characterBank=""

function generatePassword() {
  let confirmUpperCase= window.confirm("Click ok if you want to include uppercase letters")
  let confirmLowerCase= window.confirm("Click ok if you want to include lowercase letters")
  let confirmNumbers= window.confirm("Click ok if you want to include numbers")
  let confirmSymbols= window.confirm("Click ok if you want to include symbols")
  let passwordLength = prompt("How many characters do you want in your password",8)
  

  if (confirmUpperCase === true) { 
  characterBank=characterBank+uppercase
  console.log("+uppercase", characterBank)
} 
  if (confirmLowerCase === true) {
  characterBank=characterBank+lowercase
  console.log("+lowercase", characterBank)
} 
  if (confirmNumbers === true) {
  characterBank=characterBank+number
  console.log("+numbers", characterBank)
} 
  if (confirmSymbols === true) {
  characterBank=characterBank+symbols[Math.floor(Math.random()*symbols.length)];
  console.log ("+symbols", characterBank)
}
  
  return password;

}
// Write password to the #password input
function writePassword() {
  const password = generatePassword(); 
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener('click', writePassword) 





