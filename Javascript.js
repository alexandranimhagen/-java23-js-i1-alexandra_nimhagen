const message = document.querySelector("#message");
const userName = document.querySelector("#userName");
const rolledDice = document.querySelector("#score");
const btnRoll = document.querySelector("#newRoll");
const btnHold = document.querySelector("#holdRoll");
const btnNewGame = document.querySelector("#newGame");
const playerMessage = document.querySelector("#playerMessage");
const usernameButton = document.querySelector("#usernameButton");
const displayRoundscore = document.querySelector("#roundBox");
const displayTotalscore = document.querySelector("#totalBox");
const displayDice = document.querySelector("#diceBox");
const displayCount = document.querySelector("#countBox");

let totalScore = 0;
let count = 0;
let roundScore = 0;

btnRoll.addEventListener("click", handleRolls);
btnHold.addEventListener("click", holdGame);
btnNewGame.addEventListener("click", newGame);
usernameButton.addEventListener("click", displayPlayer);

function handleRolls(event) {
  event.preventDefault();
  const randomNumber = Math.ceil(Math.random() * 6);
  count += 1;
  if (randomNumber === 1) {
    btnRoll.style.backgroundColor = "#ff1493";
    roundScore = 0;
    displayDice.innerText = `Dice: ${randomNumber}`;
    displayRoundscore.innerText = `Round Score: ${roundScore}`;
  } else {
    roundScore += randomNumber;
    displayDice.innerText = `Dice: ${randomNumber}`;
    displayRoundscore.innerText = `Round Score: ${roundScore}`;
    displayTotalscore.innerText = `Total Score: ${totalScore}`;
    displayCount.innerText = `Total Rounds: ${count}`;
    if (roundScore + totalScore >= 100) {
      message.innerText = `Grattis! Du har vunnit spelet med en totalpoäng på [${(totalScore +=
        roundScore)}.] och rundor [${count}]`;
      roundScore = 0;
      totalScore = 0;
      count = 0;
    }
  }
  rolledDice.innerText = randomNumber;
}

function holdGame(event) {
  event.preventDefault();
  if (totalScore >= 100) {
    message.innerText = `Grattis! Du har vunnit spelet med en totalpoäng på [${totalScore}.]`;
    btnRoll.disabled = true;
    btnRoll.style.backgroundColor = "#ff69b4";
  } else {
    totalScore += roundScore;
    roundScore = 0;
    btnRoll.style.backgroundColor = "#ffb6c1";
  }
  displayRoundscore.innerText = `Round Score: ${roundScore}`;
  displayTotalscore.innerText = `Total Score: ${totalScore}`;
}

function newGame(event) {
  event.preventDefault();
  btnRoll.disabled = false;
  btnRoll.style.backgroundColor = "#ffb6c1";
  roundScore = 0;
  totalScore = 0;
  count = 0;

  playerMessage.innerText = `Välkommen!`;

  document.querySelector(".formContainer").style.display = "block";

  userName.value = "";
  message.innerText = "";
  displayRoundscore.innerText = "Round Score: 0";
  displayTotalscore.innerText = "Total Score: 0";
  displayCount.innerText = "Total Rounds: 0";
  displayDice.innerText = "Dice: -";
}

function displayPlayer(event) {
  event.preventDefault();
  const user = userName.value;
  playerMessage.innerText = `Välkommen ${user}!`;
  document.querySelector(".formContainer").style.display = "none";
}
