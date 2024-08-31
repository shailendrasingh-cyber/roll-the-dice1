let dice;
let totalScore = 0;
let count = 0;

const totalPoints = document.querySelector("#totalPoints");

let diceImgs = {
  dice1: "image/img1.jpeg",
  dice2: "image/img7.jpeg",
  dice3: "image/img3.jpeg",
  dice4: "image/img4.jpeg",
  dice5: "image/img5.jpeg",
  dice6: "image/img6.jpeg",
};

const throwDice = () => {
  count += 1;
  // 1. Generate random number
  dice = Math.floor(Math.random() * 6 + 1);

  // 2. Display the loading GIF
  const loadingGIF = "diceimg.gif"; // Replace with your actual GIF path
  const diceDOM = document.querySelector("#diceImgDOM");
  diceDOM.classList.remove("no-display");
  diceDOM.src = loadingGIF;

  // 3. Delay to simulate rolling
  setTimeout(() => {
    // 4. Display the result PNG after delay
    // diceDOM.src = diceImgs["dice" + dice];

    diceDOM.src = diceImgs["dice" + count];

    if (count === 6) {
      count = 0;
    }

    // 5. Update total score and check for win/lose conditions
    // if (dice === 1) {
    //     const loseMsg = document.querySelector("#display-lose");
    //     loseMsg.innerHTML = '💀 YOU LOSE! You rolled 1!';
    //     totalScore = 0;
    //     toggleBtn(rollBtn);
    // } else {
    //     hideMsg();
    //     totalScore += dice;
    //     totalPoints.innerHTML = totalScore;
    // }

    // if (totalScore >= 20) {
    //     const winMsg = document.querySelector("#display-win");
    //     winMsg.innerHTML = 'CONGRATULATIONS! YOU WON 🎉';
    //     totalScore = 0;
    //     toggleBtn(rollBtn);
    // }
  }, 3000); // Delay of 3 seconds (3000 milliseconds)
};

// HIDE MESSAGES
const hideMsg = () => {
  document.querySelector("#display-lose").innerHTML = "";
  document.querySelector("#display-win").innerHTML = "";
};

// START GAME BY ROLLING THE DICE
const rollBtn = document.querySelector("#roll-btn");
rollBtn.addEventListener("click", throwDice);

// TOGGLE BUTTON ENABLE/DISABLE STATE
const toggleBtn = (btn) => {
  btn.disabled = !btn.disabled;
};

// RESET GAME
const reset = () => {
  totalScore = 0;
  document.querySelector("#diceImgDOM").classList.add("no-display");
  totalPoints.textContent = "0";
  hideMsg();
  toggleBtn(rollBtn);
};

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", reset);
