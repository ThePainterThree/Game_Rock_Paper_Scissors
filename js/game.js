function submitName() {
    const userName = document.getElementById('name').value.trim();
    const playerName = document.getElementById('player-name');

    if (userName !== '') {
        localStorage.setItem('userName', userName);
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


function selectMove(playerMove) {
    const userName = localStorage.getItem('userName');
    const computerOptions = ['Rock', 'Paper', 'Scissors' , 'Lizard', 'Spock'];
    const computerMove = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    const playerName = document.getElementById('player-name');
    playerName.textContent = `Hello, ${userName}!`;

    const computerChoiceElement = document.getElementById('computerChoice');
    computerChoiceElement.textContent = `Computer played: ${computerMove}`;

    const winningLogic = {
        'Scissors': ['Paper', 'Lizard'],
        'Paper': ['Rock', 'Spock'],
        'Rock': ['Lizard', 'Scissors'],
        'Lizard': ['Spock', 'Paper'],
        'Spock': ['Rock', 'Scissors']
    }
    
    const getGameOptions = document.querySelector('.game-options');

    getGameOptions.addEventListener('click', function(event){
        const target = event.target;
        if(target.tagName === 'BUTTON'){
            const playerMove = target.textContent
        }
   
    let winnerMessage;
    if (playerMove === computerMove) {
        winnerMessage = "It's a tie!";
    } else if (winningLogic[playerMove].includes(computerMove)){
        winnerMessage = `${userName} wins!`;
    } else {
        winnerMessage = 'Computer wins!';
    }
    const winnerMessageElement = document.getElementById('winnerMessage');
    winnerMessageElement.textContent = winnerMessage;

})
}