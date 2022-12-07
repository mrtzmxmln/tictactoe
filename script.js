let player = 0;
let playCount = 1;
let gameStatus = 0; // 0 = playing, 1 = nobody wins, 2 = red wins, 3 = orange wins
let gameField = [
                0, 0, 0,
                0, 0, 0,
                0, 0, 0
            ];

const fieldList = document.querySelectorAll(".field");
const plays = document.querySelector(".plays");
const statusMessage = document.querySelector(".statusMessage");

function onClick(field) {
    if(gameField[field] == 0) {
        if(player == 0) {
            fieldList[field].style.backgroundColor = "red";
            player = 1;
            updateStats();
        } else if(player == 1) {
            fieldList[field].style.backgroundColor = "orange";
            player = 0;
            updateStats();
        }
        playCount++;
        checkWin();
    }
    gameField[field] = 1;
}

function updateStats() {
    plays.innerHTML = playCount.toString();
}

function checkWin() {
    // check red
    if(
        // horizontal
        ((fieldList[0].style.backgroundColor == "red") && (fieldList[1].style.backgroundColor == "red") && (fieldList[2].style.backgroundColor == "red")) || 
        ((fieldList[3].style.backgroundColor == "red") && (fieldList[4].style.backgroundColor == "red") && (fieldList[5].style.backgroundColor == "red")) ||
        ((fieldList[6].style.backgroundColor == "red") && (fieldList[7].style.backgroundColor == "red") && (fieldList[8].style.backgroundColor == "red")) ||
        // vertical
        ((fieldList[0].style.backgroundColor == "red") && (fieldList[3].style.backgroundColor == "red") && (fieldList[6].style.backgroundColor == "red")) ||
        ((fieldList[1].style.backgroundColor == "red") && (fieldList[4].style.backgroundColor == "red") && (fieldList[7].style.backgroundColor == "red")) ||
        ((fieldList[2].style.backgroundColor == "red") && (fieldList[5].style.backgroundColor == "red") && (fieldList[8].style.backgroundColor == "red")) ||
        // diagonaly
        ((fieldList[0].style.backgroundColor == "red") && (fieldList[4].style.backgroundColor == "red") && (fieldList[8].style.backgroundColor == "red")) ||
        ((fieldList[2].style.backgroundColor == "red") && (fieldList[4].style.backgroundColor == "red") && (fieldList[6].style.backgroundColor == "red")))

        {
            gameStatus = 1;
        }

    // check orange
    else if(
        // horizontal
        ((fieldList[0].style.backgroundColor == "orange") && (fieldList[1].style.backgroundColor == "orange") && (fieldList[2].style.backgroundColor == "orange")) ||
        ((fieldList[3].style.backgroundColor == "orange") && (fieldList[4].style.backgroundColor == "orange") && (fieldList[5].style.backgroundColor == "orange")) ||
        ((fieldList[6].style.backgroundColor == "orange") && (fieldList[7].style.backgroundColor == "orange") && (fieldList[8].style.backgroundColor == "orange")) ||
        // vertical
        ((fieldList[0].style.backgroundColor == "orange") && (fieldList[3].style.backgroundColor == "orange") && (fieldList[6].style.backgroundColor == "orange")) ||
        ((fieldList[1].style.backgroundColor == "orange") && (fieldList[4].style.backgroundColor == "orange") && (fieldList[7].style.backgroundColor == "orange")) ||
        ((fieldList[2].style.backgroundColor == "orange") && (fieldList[5].style.backgroundColor == "orange") && (fieldList[8].style.backgroundColor == "orange")) ||
        // diagonal
        ((fieldList[0].style.backgroundColor == "orange") && (fieldList[4].style.backgroundColor == "orange") && (fieldList[8].style.backgroundColor == "orange")) ||
        ((fieldList[2].style.backgroundColor == "orange") && (fieldList[4].style.backgroundColor == "orange") && (fieldList[6].style.backgroundColor == "orange")))
        
        {
            gameStatus = 2;
        }

    if(gameStatus == 1) {
        statusMessage.innerHTML = "Red Wins!";
        disableGame();
    } else if (gameStatus == 2) {
        statusMessage.innerHTML = "Orange Wins!";
        disableGame();
    } else if((playCount == 10) && (gameStatus == 0)) {
        statusMessage.innerHTML = "Nobody Wins!";
        disableGame();
    }
}

function disableGame() {
    for(let i = 0; i < gameField.length; i++) {
        gameField[i] = 1;
    }
}

function resetGame() {
    location.reload();
}

