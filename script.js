let player = 0;
let playCount = 1;

const fieldList = document.querySelectorAll(".field");
const plays = document.querySelector(".plays");
const winner = document.querySelector(".winner");

function onClick(field) {
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

function updateStats() {
    plays.innerHTML = playCount.toString();
}

function checkWin() {
    /* ROT */
    /* horizontal */
    if((fieldList[0].style.backgroundColor == "red") && (fieldList[1].style.backgroundColor == "red") && (fieldList[2].style.backgroundColor == "red")) {
        winner.innerHTML = "Red";
    } else if((fieldList[3].style.backgroundColor == "red") && (fieldList[4].style.backgroundColor == "red") && (fieldList[5].style.backgroundColor == "red")) {
        winner.innerHTML = "Red";
    } else if((fieldList[6].style.backgroundColor == "red") && (fieldList[7].style.backgroundColor == "red") && (fieldList[8].style.backgroundColor == "red")) {
        winner.innerHTML = "Red";
    } 
    /* vertikal */
    else if((fieldList[0].style.backgroundColor == "red") && (fieldList[3].style.backgroundColor == "red") && (fieldList[6].style.backgroundColor == "red")) {
        winner.innerHTML = "Red";
    } else if((fieldList[1].style.backgroundColor == "red") && (fieldList[4].style.backgroundColor == "red") && (fieldList[7].style.backgroundColor == "red")) {
        winner.innerHTML = "Red";
    } else if((fieldList[2].style.backgroundColor == "red") && (fieldList[5].style.backgroundColor == "red") && (fieldList[8].style.backgroundColor == "red")) {
        winner.innerHTML = "Red";
    }
    /* schräg */
    else if((fieldList[0].style.backgroundColor == "red") && (fieldList[4].style.backgroundColor == "red") && (fieldList[8].style.backgroundColor == "red")) {
        winner.innerHTML = "Red";
    } else if((fieldList[2].style.backgroundColor == "red") && (fieldList[4].style.backgroundColor == "red") && (fieldList[6].style.backgroundColor == "red")) {
        winner.innerHTML = "Red";
    }

    /* ORANGE */
    /* horizontal */
    if((fieldList[0].style.backgroundColor == "orange") && (fieldList[1].style.backgroundColor == "orange") && (fieldList[2].style.backgroundColor == "orange")) {
        winner.innerHTML = "Orange";
    } else if((fieldList[3].style.backgroundColor == "orange") && (fieldList[4].style.backgroundColor == "orange") && (fieldList[5].style.backgroundColor == "orange")) {
        winner.innerHTML = "orange";
    } else if((fieldList[6].style.backgroundColor == "orange") && (fieldList[7].style.backgroundColor == "orange") && (fieldList[8].style.backgroundColor == "orange")) {
        winner.innerHTML = "Orange";
    } 
    /* vertikal */
    else if((fieldList[0].style.backgroundColor == "orange") && (fieldList[3].style.backgroundColor == "orange") && (fieldList[6].style.backgroundColor == "orange")) {
        winner.innerHTML = "Orange";
    } else if((fieldList[1].style.backgroundColor == "orange") && (fieldList[4].style.backgroundColor == "orange") && (fieldList[7].style.backgroundColor == "orange")) {
        winner.innerHTML = "Orange";
    } else if((fieldList[2].style.backgroundColor == "orange") && (fieldList[5].style.backgroundColor == "orange") && (fieldList[8].style.backgroundColor == "orange")) {
        winner.innerHTML = "Orange";
    }
    /* schräg */
    else if((fieldList[0].style.backgroundColor == "orange") && (fieldList[4].style.backgroundColor == "orange") && (fieldList[8].style.backgroundColor == "orange")) {
        winner.innerHTML = "Orange";
    } else if((fieldList[2].style.backgroundColor == "orange") && (fieldList[4].style.backgroundColor == "orange") && (fieldList[6].style.backgroundColor == "orange")) {
        winner.innerHTML = "Orange";
    } 
}

function resetGame() {
    location.reload();
}