function preventForm(event) {
    event.preventDefault();

    const userName = document.getElementById('name').value;
    localStorage.setItem('userName', userName);

    const nameForm = document.getElementById('nameForm');
    const gameSection = document.getElementById('game');
  
    nameForm.style.display = 'none';
    gameSection.style.display = 'block';
  
    gameSection.innerHTML = `<h2>Hello, ${userName}!</h2>`;
}

function playGame() {
    const userOptions = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    const computerOptions = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    const randomPlay = Math.floor(Math.random() * computerOptions.length);
    const computerPlay = computerOptions[randomPlay];

    const computerChoiceElement = document.getElementById('computerChoice');
    computerChoiceElement.innerHTML = `Computer played: ${computerPlay}`;

    const userChoice = document.querySelector('input[name="option-list"]:checked');
    const userPlay = userChoice.value;
    const userName = localStorage.getItem('userName');

    //an if statement to determine the winner
    if (userPlay === computerPlay) {
        return 'It\'s a tie!';  
    } else if (
        (userPlay === 'Scissors' && computerPlay === 'Paper') ||
        (userPlay === 'Paper' && computerPlay === 'Rock') ||
        (userPlay === 'Rock' && computerPlay === 'Lizard') ||
        (userPlay === 'Lizard' && computerPlay === 'Spock') ||
        (userPlay === 'Spock' && computerPlay === 'Scissors') ||
        (userPlay === 'Scissors' && computerPlay === 'Lizard') ||
        (userPlay === 'Lizard' && computerPlay === 'Paper') ||
        (userPlay === 'Paper' && computerPlay === 'Spock') ||
        (userPlay === 'Spock' && computerPlay === 'Rock') ||
        (userPlay === 'Rock' && computerPlay === 'Scissors')
    ) {
        return `${userName} wins!`;
    } else {
        return 'You lost. Computer wins!';
    }
}