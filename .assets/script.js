// Assignment Code

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const incUppercase = document.getElementById("uppercase");
//constant callouts for each element to be used

var generateBtn = document.querySelector("#generate");  //variable generate button calls to button id generate

generateBtn.addEventListener("click", () => {
    let characters = lowercase;
    incUppercase.checked ? (characters += uppercase) : "";//allows uppercase if checkbox is selected
    incNumbers.checked ? (characters += numbers) : "";//allows numbers
    incSymbols.checked ? (characters += symbols) : "";//allows symbols
    passwordTxt.value = generatePassword(length.value, characters);//generation value
})

const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;//returns the password generated from the for loop
  };
