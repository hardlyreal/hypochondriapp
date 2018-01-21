// The 'Magic 8 Ball'-esque Responses
const responses = ["Yes.", "No.", "Maybe.", "It might be the start of something.", "Maybe call the doctor.", "Definitely call the doctor.", "Eh, live a little.", "Take a vitamin.", "What 911's number?", "Try again..."];

const sickBtn = document.getElementById('sickBtn');


// Event Listener
sickBtn.addEventListener('click', randomResponses);


// Gets a random array item
function randomResponses() {
  const div = document.querySelector('.insert-text');
  const randomResponse = responses[randomNumber()];
  div.innerHTML = `<p class="response-text">${randomResponse}</p>`;
}


// Gets a random number in the array
function randomNumber() {
  return Math.floor(Math.random() * responses.length);
}

