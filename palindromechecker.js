const checkButton = document.getElementById('check-btn');
const inputBox = document.getElementById('text-input');
const resultBox = document.getElementById('result');

let filterInput;
let reverseInput;



checkButton.onclick = () => {
  filterInput = inputBox.value.replace(/[^a-z0-9]/ig, "");
  reverseInput = filterInput.split("").reverse().join("");
  console.log(reverseInput, filterInput);
  if (inputBox.value == ""){
    alert(`Please input a value`);
  } else if (filterInput.toLowerCase() === reverseInput.toLowerCase()) {
    resultBox.innerText = `${inputBox.value} is a palindrome`
  } else {
    resultBox.innerText = `${inputBox.value} is not a palindrome`
  }
}