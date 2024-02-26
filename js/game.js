function submitName() {
    const userName = document.getElementById('name').value.trim();
    //const nameForm = document.querySelector('.game-form');
    const playerName = document.getElementById('player-name');

    if (userName !== '') {
        localStorage.setItem('userName', userName);
        //nameForm.style.display = 'none';
        document.querySelector('.game-form').style.display ='none';
        
        playerName.textContent = `Hello, ${userName}!`;
        playerName.style.display = 'block'; 
        
    } else {
        alert('Please enter a username.');
    }
}



document.getElementById('rockButton').addEventListener('click', function() {
    selectMove('Rock');
});

document.getElementById('scissorsButton').addEventListener('click', function() {
    selectMove('Scissors');
});

document.getElementById('paperButton').addEventListener('click', function() {
    selectMove('Paper');
});

document.getElementById('lizardButton').addEventListener('click', function() {
    selectMove('Lizard');
});

document.getElementById('spockButton').addEventListener('click', function() {
    selectMove('Spock');
});


function selectMove(move) {
    const userName = localStorage.getItem('userName');
    const computerOptions = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    const computerPlay = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    const playerName = document.getElementById('player-name');
    playerName.textContent = `Hello, ${userName}!`;

    const computerChoiceElement = document.getElementById('computerChoice');
    computerChoiceElement.textContent = `Computer played: ${computerPlay}`;

    let winnerMessage;
    if (move === computerPlay) {
        winnerMessage = "It's a tie!";
    } else if (
        (move === 'Scissors' && computerPlay === 'Paper') ||
        (move === 'Paper' && computerPlay === 'Rock') ||
        (move === 'Rock' && computerPlay === 'Lizard') ||
        (move === 'Lizard' && computerPlay === 'Spock') ||
        (move === 'Spock' && computerPlay === 'Scissors') ||
        (move === 'Scissors' && computerPlay === 'Lizard') ||
        (move === 'Lizard' && computerPlay === 'Paper') ||
        (move === 'Paper' && computerPlay === 'Spock') ||
        (move === 'Spock' && computerPlay === 'Rock') ||
        (move === 'Rock' && computerPlay === 'Scissors')
    ) {
        winnerMessage = `${userName} wins!`;
        //console.log(userName);
    } else {
        winnerMessage = 'Computer wins!';
    }
    const winnerMessageElement = document.getElementById('winnerMessage');
    winnerMessageElement.textContent = winnerMessage;
}