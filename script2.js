
let dice;
let totalScore = 0;
let gamePlaying;



const totalPoints = document.querySelector("#totalPoints");


let diceImgs = {
    dice1:'image/twist.jpeg',
    dice2:'image/twist.jpeg',
    dice3:'image/twist.jpeg',
    dice4:'image/twist.jpeg',
    dice5:'image/twist.jpeg',
    dice6:'image/twist.jpeg',
  }

  const throwDice = () => {
    // 1. Generate random number  
    dice = Math.floor((Math.random() * 6) + 1);

    // 2. Display the loading GIF
    const loadingGIF = 'diceimg.gif';  // Replace with your actual GIF path
    const diceDOM = document.querySelector("#diceImgDOM");
    diceDOM.classList.remove("no-display");
    diceDOM.src = loadingGIF;

    // 3. Delay to simulate rolling
    setTimeout(() => {
        // 4. Display the result PNG after delay
        diceDOM.src = diceImgs['dice' + dice];

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
    document.querySelector("#display-lose").innerHTML = '';
    document.querySelector("#display-win").innerHTML = '';
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
    totalPoints.textContent = '0';
    hideMsg();
    toggleBtn(rollBtn);
};

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", reset);
