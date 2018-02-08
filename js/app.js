// The 'Magic 8 Ball'-esque Responses

function EightBall() {
  this.responses = ["Yes.", "No.", "Maybe.", "It might be the start of something.", "Maybe call the doctor.", "Definitely call the doctor.", "Eh, live a little.", "Take a vitamin.", "What 911's number?", "Try again..."];
  // this.sickBtn = document.getElementById('sickBtn');
}

// Gets a random array item
EightBall.prototype.randomResponse = function() {
  const div = document.querySelector('.insert-text');
  const randomResponse = this.responses[this.randomNumber()];
  div.innerHTML = `<p class="response-text">${randomResponse}</p>`;
}
// Gets a random number in the array
EightBall.prototype.randomNumber = function() {
  return Math.floor(Math.random() * this.responses.length);
}


// UI
const sickBtn = document.getElementById('sickBtn');

// Event Listener
sickBtn.addEventListener('click', () => {
  const eightBall = new EightBall;
  eightBall.randomResponse();
});
