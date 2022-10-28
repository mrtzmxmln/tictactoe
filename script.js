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
        fieldList[field].style.backgroundColor = "green";
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
}

function resetGame() {
    location.reload();
}