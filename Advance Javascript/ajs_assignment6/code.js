// To get a random computer choice
window.computerChoose = function() {
    let array = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

// Algorithm for win and lose
// Score variables keep track of player and computer scores
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            player_score++;
            return '"You Win! Rock smash Scissors"';
        }
        else if (computerSelection === 'Paper') {
            computer_score++;
            return '"You Lose! Paper beats Rock"';
        }
        else return `"It's a tie"`;
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            player_score++;
            return '"You Win! Paper beats Rock"';
        }
        else if (computerSelection === 'Scissors') {
            computer_score++;
            return '"You Lose! Scissors cuts Paper"';
        }
        else return `"It's a tie"`;
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            player_score++;
            return '"You Win! Scissors cuts Paper"';
        }
        else if (computerSelection === 'Rock') {
            computer_score++;
            return '"You Lose! Rock smash Scissors"';
        }
        else return `"It's a tie"`;
    }
}


let player_score = 0;
let computer_score = 0;
let rounds = 0;
let max_round = 0;
function resetFunc() {
    document.getElementById("final-result").innerText = '';
    document.getElementById("result").innerText = '';
    document.getElementById("bot").innerText = 'Computer is sleeping again......zzz';
    rounds = 0;
    document.getElementById("score").innerText = `0 / 0`;
    document.getElementById('rock').style.display = 'none';
    document.getElementById('paper').style.display = 'none';
    document.getElementById('scissor').style.display = 'none';
    document.getElementById('user').innerText = `Your points: 0`;
    document.getElementById('computer').innerText = `Computer points: 0`;
}

// Final Result Function
function finalResult() {
    const output = document.getElementById("final-result");
    if (player_score > computer_score) {
        output.style.color = 'green';
        output.innerText = ("Congratulation! You WON the Game.");
    }
    else if (player_score < computer_score) {
        output.style.color = 'red';
        output.innerText = ("Sorry! You LOSE the Game.");
    }
    else {
        output.style.color = 'blue';
        output.innerText = ("TIE");
    }
    player_score = 0;
    computer_score = 0;
    setTimeout(resetFunc, 2500);
}

function addResult(result, computerSelection, rounds) {
    document.getElementById("bot").innerText = "Computer choosed: " + computerSelection;
    document.getElementById("score").innerText = rounds + ` / ${max_round}`;
    document.getElementById('user').innerText = `Your points: ` + player_score;
    document.getElementById('computer').innerText = `Computer points: ` + computer_score;
    setTimeout(function () { document.getElementById("result").innerText = result; }, 150);
}

// Buttons click functions
function rockFunc() {
    const computerSelection = window.computerChoose();
    const result = playRound("Rock", computerSelection);
    rounds++;
    addResult(result, computerSelection, rounds);
    if (rounds == max_round) finalResult();
    if (rounds > max_round) document.getElementById("score").innerText = '- / -';
}
function paperFunc() {
    const computerSelection = window.computerChoose();
    const result = playRound("Paper", computerSelection)
    rounds++;
    addResult(result, computerSelection, rounds);
    if (rounds == max_round) finalResult();
    if (rounds > max_round) document.getElementById("score").innerText = '- / -';
}
function scissorsFunc() {
    const computerSelection = window.computerChoose();
    const result = playRound("Scissors", computerSelection)
    rounds++;
    addResult(result, computerSelection, rounds);
    if (rounds == max_round) finalResult();
    if (rounds > max_round) document.getElementById("score").innerText = '- / -';
}

function roundSetter() {
    const val = parseInt(document.querySelector('#count').value);
    if (val > 0) {
        max_round = val;
        document.getElementById('rock').style.display = 'inline-block';
        document.getElementById('paper').style.display = 'inline-block';
        document.getElementById('scissor').style.display = 'inline-block';
        document.getElementById("score").innerText = rounds + ` / ${max_round}`;
    }
    else {
        alert(`Not a Valid Game rounds`)
    }
    document.getElementById('count').value = '';
}

document.querySelector("#rock").addEventListener('click', rockFunc);
document.querySelector("#paper").addEventListener('click', paperFunc);
document.querySelector("#scissor").addEventListener('click', scissorsFunc);
document.querySelector('#start').addEventListener('click', roundSetter);