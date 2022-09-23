// Variable declarations
const number = document.getElementById("number");
const btnChecker = document.querySelector(".btn-checker");
const statusText = document.querySelector(".status-text");
let numberValue;

btnChecker.addEventListener("click", function (e) {
  // Prevents from page reload
  e.preventDefault();
  numberValue = number.value;
  if (numberValue > 0) {
    numberValue % 2 == 0 ? statusText.innerText = "Yes! It's a Palindrome 👍" : statusText.innerText = "No! It's Not a Palindrome 👎";
  }
});
