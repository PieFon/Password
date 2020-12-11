// Assignment Code
var generateBtn = document.querySelector("#generate");
var x = "0123456789!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ"


function generate() {
  var password = '';
  for (let index = 1; index <= 10; index++) {
    var c = Math.floor(Math.random() * x.length) + 0;
    password += x.charAt(c);

  }
  console.log(password);
  document.getElementById('pass').innerHTML=`<h1>${password}</h1>`
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
