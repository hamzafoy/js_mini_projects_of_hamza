const getUserInput = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.error('There is an error with your input. The game is called Rock, Paper, Scissors after all. Cant bring a gun to a rock/paper/scissors fight.');
    };
};

const getComputerInput = () => {
    let random = Math.floor(Math.random()*3);
    switch (random) {
        case 0:
        return `rock`
        break;
        case 1:
        return `paper`
        break;
        case 2:
        return `scissors`
        break;
    };
};

const duel = (userinput, computerinput) => {
    if (userinput === computerinput) {
        return `Both you & the computer drew ${userinput}, this is a tie!`
    } else if (userinput === 'rock') {
        if (computerinput === 'scissors') {
            return `You win! You drew ${userinput} whilst the computer drew ${computerinput}`
        } else {
            return `You lose! You drew ${userinput} whereas the computer drew ${computerinput}`
        }
    } else if (userinput === 'paper') {
        if (computerinput === 'rock') {
            return `You win! You drew ${userinput} whilst the computer drew ${computerinput}`
        } else {
            return `You lose! You drew ${userinput} whereas the computer drew ${computerinput}`
        }
    } else if (userinput === 'scissors') {
        if (computerinput === 'paper') {
            return `You win! You drew ${userinput} whilst the computer drew ${computerinput}`
        } else {
            return `You lose! You drew ${userinput} whereas the computer drew ${computerinput}`
        }
    };
};

const playRockPaperScissors = () => {
    let userinput = getUserInput('rock');
    let computerinput = getComputerInput();
    console.log(duel(userinput, computerinput));
};

playRockPaperScissors();