const adviceText = document.getElementsByClassName('advice')[0];
const adviceID = document.getElementsByClassName('id')[0];
const diceButton = document.getElementsByClassName('btn')[0];

function GetAdvice() {
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  
  .then(data => {
    adviceText.innerHTML = data.slip.advice;
    adviceID.innerHTML = data.slip.id;
  })
  
  .catch(error => console.error('Error:', error));
}

diceButton.addEventListener('click', GetAdvice)